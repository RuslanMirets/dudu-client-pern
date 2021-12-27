import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
