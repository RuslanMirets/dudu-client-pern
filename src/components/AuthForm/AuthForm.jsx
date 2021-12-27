import React, { useContext, useState } from 'react';
import styles from './AuthForm.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';
import { Context } from '../..';
import { login, registration } from '../../http/userApi';

const AuthForm = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const { user } = useContext(Context);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login( email, password);
      } else {
        data = await registration(firstName, lastName, email, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate(HOME_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className={styles.card}>
      <h2>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
      <div className={styles.form}>
        {!isLogin && (
          <>
            <input
              className="input"
              type="text"
              placeholder="Введите имя"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="Введите фамилию"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </>
        )}
        <input
          className="input"
          type="text"
          placeholder="Введите email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Введите пароль..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.actions}>
          {isLogin ? (
            <div>
              Нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</Link>
            </div>
          ) : (
            <div>
              Есть аккаунт? <Link to={LOGIN_ROUTE}>Авторизируйтесь!</Link>
            </div>
          )}
          <button className="btn btn--blue" onClick={click}>
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
