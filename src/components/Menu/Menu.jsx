import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <NavLink to="/" exact="true">
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/tours" exact="true">
            Туры
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact="true">
            О компании
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" exact="true">
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
