import { observer } from 'mobx-react-lite';
import React from 'react';
import AuthForm from '../components/AuthForm/AuthForm';

const Auth = observer(() => {
  return (
    <>
      <AuthForm />
    </>
  );
});

export default Auth;
