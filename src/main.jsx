import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'swiper/css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';



import Home from './home/Home.jsx';
import Blog from './blog/Blog.jsx';
import Shop from './shop/Shop.jsx';
import SingleProduct from './shop/SingleProduct.jsx';
import CartPage from './shop/CartPage.jsx';
import SingleBlog from './blog/SingleBlog.jsx';
import About from './about/About.jsx';
import Contact from './contact/Contact.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import PrivateRoute from './privateRoute/PrivateRoute.jsx';
import Login from './loginPage/Login.jsx';
import SignUp from './signUp/SignUp.jsx';



const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<App />}>
      <Route
        index
        element={<Home />}
      />

      <Route
        path='blog'
        element={<Blog />}
      />

      <Route
        path='blog/:id'
        element={<SingleBlog />}
      />

      <Route
        path='shop'
        element={<Shop />}
      />

      <Route
        path='shop/:id'
        element={<SingleProduct />}
      />

      <Route element={<PrivateRoute />}>
        <Route
          path='cart-page'
          element={<CartPage />}
        />
      </Route>


      <Route
        path='about'
        element={<About />}
      />


      <Route
        path='contact'
        element={<Contact />}
      />
    </Route>

    <Route
      path='/login'
      element={<Login />}
    />

    <Route
      path='/sign-up'
      element={<SignUp/>}
    />



  </>






)


);


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>

)
