import Login from 'views/Auth/Login';
import Register from 'views/Auth/Register';

const routes = [
  {
    path: '/auth/login',
    element: Login
  },
  {
    path: '/auth/register',
    element: Register
  }
];

export default routes;
