import { Link, Outlet } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to="new-user">New User</Link>
      <Outlet />
    </section>
  );
};

export default Welcome;

// <Routes>
// <Route path="new-user" element={<p>Welcome, new user!</p>} />
// </Routes>