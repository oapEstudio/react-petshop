import CONTAINER from "../components/static/container";

const PRODUCT_DETAIL = ({cart,deleteProduct})=>{
    return (
        <CONTAINER  cart={cart} deleteProduct={deleteProduct}>
            <h1  className="display-3">Detalle del producto</h1>
        </CONTAINER>
    );
}
export default PRODUCT_DETAIL;