import HEADER from "./header";
import FOOTER from "./footer";

const CONTAINER = ({cart,children,deleteProduct})=>{

    return (
        <>
         <HEADER cartItems={cart} deleteProduct={deleteProduct} />
            <div className="container">
                {children}
            </div>
         <FOOTER/>         
        </>
    );
}
export default CONTAINER;