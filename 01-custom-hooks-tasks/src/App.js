import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {

  const [tasks, setTasks] = useState([]);

  // destructuring to get parameters returned in the custom hook file
  // renaming sendRequest to fetchTasks
  // useHttp custom hook has two arguments: fetching and transforming
  // after refactoring transformTasks is only function being passed to useHttp
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  // useEffect runs the fetchTasks function when the page loads
  useEffect(() => {
    // function for generating an array of tasks and updating state
    const transformTasks = ((tasksObj) => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }
      // setTasks is guaranteed to never change
      setTasks(loadedTasks);
    });

    fetchTasks({ url: 'https://react-custom-hooks-e5688-default-rtdb.firebaseio.com/tasks.json' }, transformTasks);
  }, [fetchTasks]);

  // the new task is concat'd to the task objects of the previous state
  // using the state function assigned to change state
  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
