import { useContext } from "react";
import CONTAINER from "../components/static/container";
import { CartContext } from "../context/CartContext";
import { useParams } from "react-router-dom";

const PRODUCT_DETAIL = ()=>{
    
    const {products} = useContext(CartContext);
    const {id} = useParams();

    const findProduct = products.find(product => product.id == id);

    console.log(findProduct);
    if(!findProduct){
        return (
            <CONTAINER >
                <h1  className="display-3">Producto no encontrado</h1>
            </CONTAINER>
        );    
    }


    return (
        <CONTAINER >
            <br />
            <br />
            <br />
            <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={findProduct.img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{findProduct.name}</h5>
                                <p className="card-text">{findProduct.description}</p>
                                <p className="card-text"><small className="text-body-secondary">{(new Date(findProduct.createdAt)).toDateString()}</small></p>
                            </div>
                        </div>
                    </div>
            </div>
        </CONTAINER>
    );
}
export default PRODUCT_DETAIL;