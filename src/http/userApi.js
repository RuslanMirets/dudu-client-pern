import jwtDecode from 'jwt-decode';
import { $authHost, $host } from '.';

export const registration = async (firstName, lastName, email, password) => {
  const { data } = await $host.post('api/user/registration', {
    firstName,
    lastName,
    email,
    password,
    role: 'USER',
  });
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post('api/user/login', { email, password });
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
};

export const auth = async () => {
  const { data } = await $authHost.get('api/user/auth');
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
};

export const removeToken = async () => {
  const { data } = await $authHost.get('api/user/auth');
  localStorage.removeItem('token', data.token);
  return jwtDecode(data.token);
};
