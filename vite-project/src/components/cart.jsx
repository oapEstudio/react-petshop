import './cart.css';
import {useContext} from 'react';
import {CartContext} from './../context/CartContext'
import { COLOR_PETSHOP } from '../constant/constant';

const CART = ({isOpen, onClose})=>{

    const {cart,handleDeleteFromCart,clearCart} = useContext(CartContext);

    return (
        <div className={`cart-drawer ${isOpen? 'open' : ''}`}>
            <div className="cart-header">
                <h2>Carrito de compras</h2>
                <button onClick={onClose} className="close-button">X</button>
            </div>
            <div className="cart-content">
                {cart.length===0 ? 
                    (<p style={{color: 'red'}}>El carrito esta vacia</p>): 
                    (<ul className="cart-item">
                        {cart.map((item,index)=>(
                            <>
                                <div className='row'>
                                    <div className="col-6">
                                        <label>{item.name}: {item.price} | cantidad: {item.quantity}</label>
                                    </div>
                                    <div className='col-6'>
                                            <button 
                                                className='btn btn-danger bg-danger' 
                                                key={'button_cart_' + item.id} 
                                                onClick={()=>handleDeleteFromCart(item)}>eliminar<i className="fa-solid fa-trash"></i>
                                            </button>
                                    </div>
                                </div>
                                <br />
                            </>
                            ))
                        }
                    </ul>)
                }
            </div>
            <div className='cart-footer'>
                 {cart.length>0 && 
                        (<center>
                            <button 
                                style={{ backgroundColor: COLOR_PETSHOP,margin: '10px'}} 
                                className='btn' onClick={clearCart}>Finalizar compra
                            </button>
                        </center>)
                }
            </div>
        </div>
    );
}

export default CART;