import HEADER from "./header";
import FOOTER from "./footer";

const CONTAINER = ({children})=>{

    return (
        <>
         <HEADER />
            <div className="container">
                {children}
            </div>
         <FOOTER/>         
        </>
    );
}
export default CONTAINER;