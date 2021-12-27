import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from '../../routes';
import styles from './AppRouter.module.scss';

const AppRouter = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <Routes>
          {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={Component} exact />
          ))}
        </Routes>
      </div>
    </main>
  );
};

export default AppRouter;
