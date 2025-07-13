import React, { useState, useEffect, useContext } from "react";

import { CartContext } from "../context/CartContext";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import  Modal  from "../components/modal";

import FormularioEdicion from "./../components/formEdit";
import FormularioProducto from "../components/formAdd";
import { COLOR_PETSHOP } from "../constant/constant";

const styleTable = {
    border: '1px solid '+COLOR_PETSHOP
}



const ADMIN = () => {

    const { setIsAuth } = useContext(CartContext)

    const {
        products,
        loading,
        open,
        setOpen,
        openEdit,
        setOpenEdit,
        selected,
        setSelected,
        addProduct,
        updateProduct,
        deleteProduct, 
    } = useContext(AdminContext)

    const navigate = useNavigate();

    const ID_MODAL_EDIT = "modal_edit_product";   
    const ID_MODAL_ADD = "modal_add_product";   

    const myModalEl = document.getElementById(ID_MODAL_EDIT); 
    const myModalADD = document.getElementById(ID_MODAL_ADD); 
    

    if(openEdit && myModalEl) {
        
        const myModal = bootstrap.Modal.getOrCreateInstance(myModalEl);
        myModal.show();
    }

    if(!openEdit && myModalEl){

        const myModal = bootstrap.Modal.getOrCreateInstance(myModalEl);
        myModal.hide();
    }

     if(open && myModalADD) {
        
        const myModal = bootstrap.Modal.getOrCreateInstance(myModalADD);
        myModal.show();
    }

    if(!open && myModalADD){

        const myModal = bootstrap.Modal.getOrCreateInstance(myModalADD);
        myModal.hide();
    }
   

    return (
        <div className="container">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>                  
                    <h1 className="title">Panel Administrativo</h1>
                    <br />
                    <button className="btn btn-primary" style={{backgroundColor:'#98d9b6', borderColor: '#98d9b6'}} onClick={() => setOpen(true)}>Agregar producto nuevo</button>
                    <br />
                    <br />
                    <table className="table table-bordered border-primary" >
                         <thead>
                            <tr>
                                <th scope="col" style={styleTable}>ID</th>
                                <th scope="col" style={styleTable}>Nombre</th>                              
                                <th scope="col" style={styleTable}>Precio</th>
                                <th scope="col"style={styleTable}>Stock</th>
                                <th scope="col" style={styleTable}>Imagen</th>
                                <th scope="col"style={styleTable}>Editar</th>
                                <th scope="col" style={styleTable}>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) =>(
                                <tr>
                                    <td style={styleTable}  scope="row">{product.id}</td>
                                    <td style={styleTable} >{product.name}</td>
                                    <td style={styleTable} >{product.price}</td>
                                    <td style={styleTable} >{product.stock}</td>
                                    <td style={styleTable} >
                                        <img  width="50" height="50" className="rounded mx-auto d-block" src={product.img} alt={product.name} />
                                    </td>
                                    <td style={styleTable} >
                                        <button  className="btn" onClick={() => {
                                        setOpenEdit(true)
                                        setSelected(product)
                                    }}>Editar</button>

                                    </td>
                                    <td style={styleTable} >
                                        <button className="btn" onClick={() => deleteProduct(product.id)}>Eliminar</button>
                                    </td>
                                </tr>                                
                            ))}
                        </tbody>
                    </table>  
                   
                  
                     { 
                        <Modal  id={ID_MODAL_ADD} title="Agregar Producto" titleButtonLeft="Guardar">
                              {
                                open && (<FormularioProducto onAgregar={addProduct} />)
                              }
                        </Modal>  
                    }
                    { 
                        <Modal  id={ID_MODAL_EDIT} title="Editar Producto" titleButtonLeft="Editar">
                              {
                                openEdit && (  <FormularioEdicion productoSeleccionado={selected} onActualizar={updateProduct} />)
                              }
                        </Modal>  
                    }
                           
                </>
            )}
            
            
        </div>
    );
};

export default ADMIN;
