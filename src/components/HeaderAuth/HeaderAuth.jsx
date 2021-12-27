import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../..';
import styles from './HeaderAuth.module.scss';

const HeaderAuth = () => {
  const { user } = useContext(Context);

  return (
    <div className={styles.user}>
      {user.isAuth ? (
        <div className={styles.logout}>Выйти</div>
      ) : (
        <Link className={styles.login} to="/login">
          <img src="/static/images/login.png" alt="Login" />
        </Link>
      )}
    </div>
  );
};

export default HeaderAuth;
