import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import HOME from './pages/home'
import PRODUCTS_GALLERY from './pages/products-gallery';
import CONTACT from './pages/contact';
import NOT_FOUND from './pages/not-found';
import ABOUT from './pages/about';
import PRODUCT_DETAIL from './pages/product-detail';

function App() {
  
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(false);

  useEffect(()=>{
    fetch('/data/data.json')
    .then(resp=>resp.json())
    .then(data=>{
      setTimeout(()=>{
        
        setProducts(data[0].products);
        setLoading(false);
      },5000)
    })
    .catch(error=>{
      console.log(error);
      setLoading(false);
      setError(true);
    })
  },[]);

  const handleAddCart = (product) =>{
    const productInCart = cart.find((item)=>item.id===product.id);

    if(productInCart){
      setCart(cart.map((item)=>{
        return  item.id===product.id?{...item, quantity: item.quantity + 1} : item;
      }))
    }else{
      setCart([...cart,{...product,quantity:1}])
    }
  };

  const handleDeleteFromCart = (product) =>{
    
    setCart(()=>{
      return cart.map(item=>{
        if(item.id === product.id){
          
          if(item.quantity > 1){
            return {...item, quantity: item.quantity -1};
          }

          return null;
        }

        return item;
      }).filter(item=>item !==null);
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HOME deleteProduct={handleDeleteFromCart} addCart={handleAddCart} cart={cart} products={products} loading={loading} />}/>
        <Route path="/about" element={<ABOUT cart={cart}/>}/>
        <Route path="/products" element={<PRODUCTS_GALLERY deleteProduct={handleDeleteFromCart} addCart={handleAddCart}  cart={cart} products={products} loading={loading}  />}/>
        <Route path="/contacts" element={<CONTACT cart={cart}/>}/>
        <Route path="/products/:id" element={<PRODUCT_DETAIL cart={cart} deleteProduct={handleDeleteFromCart} />} />
        <Route path='*' element={<NOT_FOUND/>}/>
      </Routes>
    </Router>
  )
}

export default App
