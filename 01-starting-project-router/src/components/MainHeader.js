import { Navlink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Navlink to='/welcome'>Welcome</Navlink>
          </li>
          <li>
            <Navlink to='/products'>Products</Navlink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;