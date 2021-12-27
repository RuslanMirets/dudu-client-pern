import React from 'react';
import styles from './AuthForm.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';

const AuthForm = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <div className={styles.card}>
      <h2>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
      <form>
        {!isLogin && (
          <>
            <input className="input" type="text" placeholder="Введите имя" />
            <input className="input" type="text" placeholder="Введите фамилию" />
          </>
        )}
        <input className="input" type="text" placeholder="Введите email" />
        <input className="input" type="password" placeholder="Введите пароль..." />
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
          <button className="btn btn--blue">{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
