import { useContext } from "react";
import PRODUCTS_LIST from "../components/products_list";
import CONTAINER from "../components/static/container";
import SPINNER from "../components/static/spinner";
import { CartContext } from "../context/CartContext";

const PRODUCTS_GALLERY = () => {
    const {loading} = useContext(CartContext)
    return (
         <>
           <CONTAINER >
                {
                    loading? <SPINNER/> : <PRODUCTS_LIST isPage="true" />
                }   
           </CONTAINER> 
        </>
    );
}
export default PRODUCTS_GALLERY;