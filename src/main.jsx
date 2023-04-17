import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/client';
import Client from './ApolloClient';


import Product from "./pages/Product"
import LandingPage from "./components/landingpage/LandingPage"
import DeatilProduct from "./components/DetailProduct";
import Login from "./pages/login/Login";
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import Register from "./pages/register/Register";
import Edit from './components/edit/Edit';
import TableProduct from './components/loadmore/TableProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: <LandingPage />,
    loader: () => {
      const isLogin = JSON.parse(localStorage.getItem("isLoggedIn"));
      if (!isLogin) {
        return redirect('/login')
      }
      return null
    },
  },
  {
    path: '/createproduct',
    element: <Product />,
    loader: () => {
      const isLogin = JSON.parse(localStorage.getItem("isLoggedIn"));
      if (!isLogin) {
        return redirect('/login')
      }
      return null
    },
  },
  {
    path: '/account/:id',
    element: <DeatilProduct />,
    loader: () => {
      const isLogin = JSON.parse(localStorage.getItem("isLoggedIn"));
      if (!isLogin) {
        return redirect('/login')
      }
      return null
    },
  },
  {
    path: '/edit/:id',
    element: <Edit />,
    loader: () => {
      const isLogin = JSON.parse(localStorage.getItem("isLoggedIn"));
      if (!isLogin) {
        return redirect('/login')
      }
      return null
    },
  },
  {
    path: '/products',
    element: <TableProduct />,
    loader: () => {
      const isLogin = JSON.parse(localStorage.getItem("isLoggedIn"));
      if (!isLogin) {
        return redirect('/login')
      }
      return null
    },
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={Client}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ApolloProvider>
)
