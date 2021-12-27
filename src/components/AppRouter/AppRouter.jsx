import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Context } from '../..';
import { adminRoutes, publicRoutes } from '../../routes';
import { HOME_ROUTE } from '../../utils/consts';
import styles from './AppRouter.module.scss';

const AppRouter = () => {
  const { user } = useContext(Context);

  return (
    <main className={styles.main}>
      <div className="container">
        <Routes>
          {user.isAuth &&
            adminRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={Component} exact />
            ))}
          {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={Component} exact />
          ))}
          <Route path="*" element={<Navigate to={HOME_ROUTE} />} />
        </Routes>
      </div>
    </main>
  );
};

export default AppRouter;
