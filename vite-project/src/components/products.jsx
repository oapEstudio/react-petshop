import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { COLOR_PETSHOP } from "../constant/constant";

const PRODUCTS = ({product})=>{

    const [quantity, setQuantity] = useState(1);
    const {handleAddCart} = useContext(CartContext);

     const increase = () => {
        if(product.quantity==undefined) product = {...product,quantity: 0};

        if (quantity + product.quantity <= product.stock) {
            product.quantity = quantity
            setQuantity(prev => prev + 1);
        }
    };

    const decrease = () => {
        product.quantity = quantity;
        setQuantity(prev => (prev > 1 ? prev - 1 : prev));
    };

    const WIDTH = {
        width: "18rem"
    };
   const styleImg = {
       height: '200px'
   };

    return (
       <div className="card text-center h-100" style={WIDTH}>
                <img src={product.img} className="card-img-top" alt={product.name} style={styleImg}/>
                <div className="card-body">
                    <h5 className="card-title" ><Link to={`/products/${product.id}`} style={{ color: COLOR_PETSHOP}}>{product.name}</Link></h5>
                    <p className="card-text">Precio: ${product.price}</p>
                    <p className="card-text">Stock: {product.stock}</p>
                    <div>
                        <button className="btn" onClick={decrease} style={{ backgroundColor: COLOR_PETSHOP}}>-</button>
                        <span>{quantity}</span>
                        <button className="btn" onClick={increase} style={{ backgroundColor: COLOR_PETSHOP}}>+</button>
                    </div>
                </div>
                 <div className="card-footer bg-transparent border-success">
                    <button style={{ backgroundColor: COLOR_PETSHOP,borderColor: COLOR_PETSHOP}} onClick={()=>handleAddCart({...product, quantity: quantity})} className="btn btn-primary">Agregar al carrito</button>
                 </div>
        </div>
    );
};

export default PRODUCTS;