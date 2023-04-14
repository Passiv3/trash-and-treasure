import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/errorPage';
import LoginPage from './pages/loginPage';
import AboutPage from './pages/aboutPage';
import FrontPage from './pages/frontPage';
import AddPage from './pages/addPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <FrontPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/new',
        element: <AddPage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
