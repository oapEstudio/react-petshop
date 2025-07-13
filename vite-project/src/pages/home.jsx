import { useContext } from "react";
import { Link } from "react-router-dom";
import PRODUCTS_LIST from "../components/products_list";
import CONTAINER from "../components/static/container";
import SPINNER from "../components/static/spinner";
import  "./home.css";
import { CartContext } from "../context/CartContext";

const HOME = () => {

    const {loading} = useContext(CartContext);
    
    return (
        <>
           <CONTAINER >
                <main>
                    <div className="container-title">
                        <h1 className="display-3">BIENVENIDOS A PETSHOP-NACHO</h1> 
                        <h5>Aqui podra encontrar todo lo que necesita para su mascosa</h5> 
                    </div>
                                       
                    {
                        loading? <center><SPINNER/> </center> : 
                        (<PRODUCTS_LIST  />
                            
                        )
                    }
                    <br />
                    {
                        !loading && <center><Link to='/products'  className='nav-link'>Ver mas...</Link></center>
                    }
                    
                </main>    
           </CONTAINER>                       
        </>
    );
}
export default HOME;