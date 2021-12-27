import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';
import AppRouter from './components/AppRouter/AppRouter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { auth } from './http/userApi';

const App = observer(() => {
  const { user } = useContext(Context);

  useEffect(() => {
    auth().then((data) => {
      user.setUser(true);
      user.setIsAuth(true);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
});

export default App;
