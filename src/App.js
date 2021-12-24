import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <AppRouter />
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
