import { useState } from "react";
import { Link } from "react-router-dom";

const PRODUCTS = ({product,addCart})=>{

    const [quantity, setQuantity] = useState(1);

    const increase = () => setQuantity(prev=>(prev<product.stock?prev + 1 : prev));
    const decrease = () => setQuantity(prev=>(prev>1?prev -1 : 1));

    const WIDTH = {
        width: "18rem"
    };
    return (
       <div className="card text-center h-100" style={WIDTH}>
                <img src={product.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"><Link to={`/products/${product.id}`}>{product.name}</Link></h5>
                    <p className="card-text">Precio: ${product.price}</p>
                    <p className="card-text">Stock: {product.stock}</p>
                    <div>
                        <button onClick={decrease}>-</button>
                        <span>{quantity}</span>
                        <button onClick={increase}>+</button>
                    </div>
                </div>
                 <div className="card-footer bg-transparent border-success">
                    <button onClick={()=>addCart(product)} className="btn btn-primary">Agregar al carrito</button>
                 </div>
        </div>
    );
};

export default PRODUCTS;