import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Toast, Error, Footer, Sidebar, Navbar } from './components'
import 'react-toastify/dist/ReactToastify.css'

import {
    Home,
    About,
    Cart,
    ErrorPage,
    Login,
    Checkout,
    Product,
    Order,
    Profile,
    Reset,
    SingleProduct,
    PrivateRoute,
    Register,
    ForgetPassword
} from './pages'

function App() {

  return (
    <>
      <div>
        <Router>
          <Toast />
        </Router>
       </div>
    </>
  )
}

export default App
