import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import {API} from  "./../constant/constant";
import Swal from "sweetalert2";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [isAuthenticated, setIsAuth] = useState(false);

     const url = new URL(API);


    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                 setProducts(data);
                    setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
                setError(true);
            });
    }, []);

    const handleAddCart = (product) => {

        const productInCart = cart.find((item) => item.id === product.id);

        if (productInCart) {
            setCart(cart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: product.quantity }
                    : item
            ));
        } else {
            setCart([...cart, { ...product }]);
        }
    };

    const handleDeleteFromCart = (product) => {
        setCart(() => {
            return cart.map(item => {
                if (item.id === product.id) {
                    if (item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return null;
                }
                return item;
            }).filter(item => item !== null);
        });
    };

    const clearCart = ()=>{
        setCart([]);
        Swal.fire('Compra finalizada!!','','success');        
    }
    return (
        <CartContext.Provider
            value={{
                cart,
                products,
                loading,
                error,
                handleAddCart,
                handleDeleteFromCart,
                isAuthenticated, 
                setIsAuth,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
