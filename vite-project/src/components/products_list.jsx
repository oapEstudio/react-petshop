import { useContext } from "react";
import PRODUCTS from "./products";
import { CartContext } from "../context/CartContext";
import { SECTION } from "../constant/constant";

const PRODUCTS_LIST = ({isPage = false})=>{


    const {products} = useContext(CartContext);

    const productsView = isPage?products:
                                products
                                .filter(f=>f.section==SECTION.GALLERY_PRODUCT_HOME);
    return (
        <>
        <br />
            <h2 className="display-4">GALERIA DE PRODUCTOS</h2>
           <br />
            <section>
                 <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        productsView                       
                        .map(product=>{
                            return (
                                <div key={'div_product_' + product.id} className="col">
                                    <PRODUCTS key={product.id} product={product} />
                                </div>
                            );
                        })
                    }
                 </div>
            </section>
        </>
    )
}

export default PRODUCTS_LIST;