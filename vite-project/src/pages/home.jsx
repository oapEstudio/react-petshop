import PRODUCTS_LIST from "../components/products_list";
import CONTAINER from "../components/static/container";
import SPINNER from "../components/static/spinner";
import  "./home.css";

const HOME = ({cart, products, loading, addCart,deleteProduct}) => {
    return (
        <>
           <CONTAINER cart={cart} deleteProduct={deleteProduct}>
                <main>
                    <div className="container-title">
                        <h1 className="display-3">BIENVENIDOS A PETSHOP-NACHO</h1> 
                        <h5>Aqui podra encontrar todo lo que necesita para su mascosa</h5> 
                    </div>
                                       
                    {
                        loading? <SPINNER/> : <PRODUCTS_LIST addCart={addCart} products={products} />
                    }
                </main>    
           </CONTAINER>                       
        </>
    );
}
export default HOME;