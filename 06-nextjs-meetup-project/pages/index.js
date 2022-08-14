// import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'New Town Hall, Old Town of Munich',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://pix10.agoda.net/geo/city/318/1_318_02.jpg?ca=6&ce=1&s=1920x822',
    address: 'New York City',
    description: 'This is a second meetup!'
  }
]

function HomePage(props) {

  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // // useEffect runs after the component executes
  // // two component render cycles (empty and then loaded)
  // // nextJS only shows source for the first render, not the second
  // useEffect(() => {
  //   // send an http request and fetch data
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return (
    <MeetupList meetups={props.meetups} />
  )
}

// works in pages for pre-rendering before the component function runs
// code that runs here doesn't run on the client, only on the server
// it's executed during the build cycle
// revalidate sets timer for re-pregenerating data on the server
export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  };
};

export default HomePage