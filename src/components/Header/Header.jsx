import React from 'react';
import { Link } from 'react-router-dom';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import Menu from '../Menu/Menu';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.body}>
          <Link to="/">DuDu</Link>
          <Menu />
          <HeaderAuth/>
        </div>
      </div>
    </header>
  );
};

export default Header;
