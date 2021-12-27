import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../..';
import { removeToken } from '../../http/userApi';
import { LOGIN_ROUTE } from '../../utils/consts';
import styles from './HeaderAuth.module.scss';

const HeaderAuth = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logout = () => {
    removeToken();
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <div className={styles.user}>
      {user.isAuth ? (
        <div className={styles.logout} onClick={() => logout()}>
          Выйти
        </div>
      ) : (
        <div className={styles.login} onClick={() => navigate(LOGIN_ROUTE)}>
          <img src="/static/images/login.png" alt="Login" />
        </div>
      )}
    </div>
  );
});

export default HeaderAuth;
