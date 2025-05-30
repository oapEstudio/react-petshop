import PRODUCTS_LIST from "../components/products_list";
import CONTAINER from "../components/static/container";
import SPINNER from "../components/static/spinner";

const PRODUCTS_GALLERY = ({cart, products, loading, addCart,deleteProduct}) => {
    return (
         <>
           <CONTAINER cart={cart} deleteProduct={deleteProduct}>
                {
                    loading? <SPINNER/> : <PRODUCTS_LIST products={products} />
                }   
           </CONTAINER> 
        </>
    );
}
export default PRODUCTS_GALLERY;