import { useContext } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import HOME from './pages/home'
import PRODUCTS_GALLERY from './pages/products-gallery';
import CONTACT from './pages/contact';
import NOT_FOUND from './pages/not-found';
import ABOUT from './pages/about';
import PRODUCT_DETAIL from './pages/product-detail';
import ROUTE_PROTECTED from './routes/route-protected';
import ADMIN  from './pages/admin';
import { CartContext } from './context/CartContext';
import LOGIN from './pages/login';
import { CONTAINER_ADMIN } from './components/static/container-admin';

function App() {
  
  const {isAuthenticated} = useContext(CartContext);

  return (
      <Routes>
        <Route path="/" element={<HOME  />}/>
        <Route path="/about" element={<ABOUT />}/>
        <Route path="/products" element={<PRODUCTS_GALLERY />}/>
        <Route path="/contacts" element={<CONTACT />}/>
        <Route path="/products/:id" element={<PRODUCT_DETAIL />} />
        <Route path='/admin' element={<ROUTE_PROTECTED isAuthenticated={isAuthenticated}>
                                                  <CONTAINER_ADMIN>
                                                        <ADMIN/>
                                                    </CONTAINER_ADMIN>                                           
                                      </ROUTE_PROTECTED>} />
        <Route path="/login" element={<LOGIN /> } />
        <Route path='*' element={<NOT_FOUND/>}/>
      </Routes>
  )
}

export default App
