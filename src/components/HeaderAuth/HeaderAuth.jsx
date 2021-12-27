import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderAuth.module.scss';

const HeaderAuth = () => {
  return (
    <Link className={styles.login} to='/login'>
      <img src="/static/images/login.png" alt="Login" />
    </Link>
  );
};

export default HeaderAuth;
