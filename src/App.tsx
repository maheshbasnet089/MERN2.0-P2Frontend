

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store'
import Register from './pages/auth/register/Register'
import Login from './pages/auth/login/Login'
import SingleProduct from './pages/singleProduct/SingleProduct'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Checkout from './pages/checkout/Checkout'
import MyOrders from './pages/orders/myOrders/MyOrders'
import MyOrdersDetails from './pages/orders/myOrders/MyOrdersDetails'


function App() {
  return (
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/product/:id' element={<SingleProduct />} />
      <Route path='/cart/' element={<Cart />} /> 
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/myorders' element={<MyOrders />} />
      <Route path='/myorders/:id' element={<MyOrdersDetails />} />
    </Routes>
  </BrowserRouter>
  </Provider>
  )
}

export default App
