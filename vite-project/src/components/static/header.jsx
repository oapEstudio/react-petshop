import { Link,useNavigate } from "react-router-dom";
import React, {useState, useContext} from "react";

import logo from "./../../assets/logo.jpg";
import Market from "./../../../public/img/store-solid.svg";
import CART from "../cart";
import { CartContext } from "../../context/CartContext";

const HEADER = ()=>{

    const LOGO = logo;
    const [isCartOpen, setCartOpen] = useState(false);
    const navigate = useNavigate();
    const { setIsAuth,isAuthenticated } = useContext(CartContext)
    const styleButtonMarket = {
        width: '20px'
    }

    const exit = ()=>{

        localStorage.setItem('isAuth',false);
        setIsAuth(false)
        navigate('/');
    }

    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm " style={{backgroundColor:'#98d9b6'}}>
                 <div className="container">
                
                <Link className="navbar-brand" to="/">
                    <img src={LOGO} alt="Logo" width="70" height="70" className="d-inline-block align-text-top" />
                </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" title="Alternar navegación" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        
                    </span>
                </button>
                <div className="collapse navbar-collapse d-sm-inline-flex justify-content-between">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item"><Link to='/'  className='nav-link'>Inicio</Link></li>
                        <li className="nav-item"><Link to='/about' className='nav-link'>Sobre nosotros</Link></li>
                        <li className="nav-item"><Link to='/products' className='nav-link'>Galeria de productos</Link></li>
                        <li className="nav-item"><Link to='/contacts' className='nav-link'>Contactos</Link></li>                                                       
                     
                        <li className="nav-item"><Link to='/admin' className='nav-link'>Administrador</Link></li>                                                       
                        
                    </ul>
                    {!isAuthenticated && (

                        <div>
                            <button className="btn" onClick={()=>setCartOpen(true)}>
                                <img src={Market} alt="Market" style={styleButtonMarket} />
                            </button>
                            <CART isOpen={isCartOpen} onClose={()=>
                                setCartOpen(false)
                            }/>
                        </div>
                    )}
                    {isAuthenticated && (

                        <div>
                            <button className="btn" onClick={exit}>Salir</button>
                        </div>
                    )}
                </div>
            </div>
              
            </nav>
        </header>
    );
};

export default HEADER;