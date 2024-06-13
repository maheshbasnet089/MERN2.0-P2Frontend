

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store'
import Register from './pages/auth/register/Register'
import Login from './pages/auth/login/Login'
import SingleProduct from './pages/singleProduct/SingleProduct'
import Home from './pages/home/Home'


function App() {
  return (
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/product/:id' element={<SingleProduct />} />
    </Routes>
  </BrowserRouter>
  </Provider>
  )
}

export default App
