import './cart.css';

const CART = ({cartItems, isOpen, onClose,deleteProduct})=>{
    return (
        <div className={`cart-drawer ${isOpen? 'open' : ''}`}>
            <div className="cart-header">
                <h2>Carrito de compras</h2>
                <button onClick={onClose} className="close-button">X</button>
            </div>
            <div className="cart-content">
                {cartItems.length===0 ? 
                    (<p style={{color: 'red'}}>El carrito esta vacia</p>): 
                    (<ul className="cart-item">
                        {cartItems.map((item,index)=>(
                            <>
                                <li key={'li_cart_' + item.id} style={{color: "black"}}>
                                    {item.name} - {item.price}
                                    <button key={'button_cart_' + item.id} onClick={()=>deleteProduct(item)}>eliminar<i className="fa-solid fa-trash"></i></button>
                                </li>
                            </>
                            ))
                        }
                    </ul>)
                }
            </div>

        </div>
    );
}

export default CART;