import React, { useState, useEffect,forwardRef, useImperativeHandle, useRef } from 'react';

const FormularioEdicion = forwardRef(({ productoSeleccionado, onActualizar },ref) => {
    const [producto, setProducto] = useState(productoSeleccionado);

    const formRef = useRef(null);
    
    useImperativeHandle(ref, () => ({
        submit: () => {
            formRef.current?.requestSubmit(); // Forma moderna de enviar formulario
        },
    }));
    useEffect(()=>{
        setProducto(productoSeleccionado)
    },[productoSeleccionado])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });

    };
    return <>
      <form ref={formRef} onSubmit={(e)=>{
                        e.preventDefault()
                        onActualizar(producto)
                    }}>
           

                        <br />

                        <div className='row'>
                                <div className='col-sm-6 col-md-6'>
                                    <label>ID:</label>
                                </div>
                                <div className='col-sm-6 col-md-6'>
                                    <input
                                        type="number"
                                        name="id"
                                        value={producto.id || ''}
                                        onChange={handleChange}
                                        readOnly
                                    />
                                </div>
                        </div>
                        <br />
                        <div className='row'>
                                <div className='col-sm-6 col-md-6'>
                                      <label>Nombre:</label>
                                </div>
                                <div className='col-sm-6 col-md-6'>
                                    <input
                                        type="text"
                                        name="name"
                                        value={producto.name || ''}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                        </div>
                        <br />
                        <div className='row'>
                                <div className='col-sm-6 col-md-6'>
                                     <label>Precio:</label>
                                </div>
                                <div className='col-sm-6 col-md-6'>
                                    <input
                                        type="number"
                                        name="price"
                                        value={producto.price || ''}
                                        onChange={handleChange}
                                        required
                                        min="0"
                                    />
                                </div>
                        </div>
                        <br />
                        <div className='row'>
                                <div className='col-sm-6 col-md-6'>
                                    <label>stock:</label>
                                </div>
                                <div className='col-sm-6 col-md-6'>
                                   <input
                                        type="number"
                                        name="stock"
                                        value={producto.stock || ''}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                        </div>
                        <br />
                        <div className='row'>
                                <div className='col-sm-6 col-md-6'>
                                     <label>Imagen URL:</label>
                                </div>
                                <div className='col-sm-6 col-md-6'>
                                    <input
                                        type="text"
                                        name="img"
                                        value={producto.img || ''}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                        </div>
                        <div className='row'>
                                <div className='col-sm-6 col-md-6'>
                                     <label>Seccion</label>
                                </div>
                                <div className='col-sm-6 col-md-6'>
                                    <input
                                        type="text"
                                        name="section"
                                        value={producto.section || ''}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                        </div>
                                              
            </form>
                         
    </>
})
export default FormularioEdicion;