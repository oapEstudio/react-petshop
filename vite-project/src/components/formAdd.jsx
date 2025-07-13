import React, { forwardRef, useImperativeHandle, useRef,useState } from 'react';


const FormularioProducto = forwardRef(({ onAgregar },ref)=> {

    const [submitted, setSubmitted] = useState(false);

    const formRef = useRef(null);

    useImperativeHandle(ref, () => ({
        submit: () => {
        formRef.current?.requestSubmit(); // Forma moderna de enviar formulario
        },
    }));
    const [product, setProduct] = useState({
        name: '',
        price: '',
        stock: '',
        img: ''
    });
    const [errores, setErrores] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };


    const validarFormulario = () => {
        const nuevosErrores = {};
        if (!product.name.trim()) {
            nuevosErrores.name = 'El nombre es obligatorio.';
        }
        if (!product.price || product.price <= 0) {
            nuevosErrores.price = 'El precio debe ser mayor a 0.';
        }
        
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validarFormulario()) {
            return;
        }

        if (submitted) return; // evita doble submit

        setSubmitted(true);
        onAgregar(product); // Llamada a la función para agregar el producto
        setProduct({
            name: '',
            price: '',
            stock: '',
            img: ''
        }); // Limpiar el formulario
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-6">
                    <label>Nombre:</label>
                </div>
                <div className="col-6">
                        <input
                            type="text" 
                            name="name" 
                            value={product.name} 
                            onChange={handleChange} required />
                            {errores.name && 
                            <p style={{ color: 'red' }}>{errores.name}</p>}
                </div>
            </div>
            <br />
             <div className="row">
                <div className="col-6">
                    <label>Precio:</label>
                </div>
                <div className="col-6">
                        <input 
                            type="number" 
                            name="price" 
                            min="0"
                            value={product.price} 
                            onChange={handleChange} 
                            required/>
                            {errores.price && 
                            <p style={{ color: 'red' }}>{errores.price}</p>}
                </div>
            </div>
            <br />
             <div className="row">
                <div className="col-6">
                    <label>Stock:</label>
                </div>
                <div className="col-6">
                        <input
                            type="number"
                            name="stock"
                            value={product.stock || ''}
                            onChange={handleChange}
                            required/>
                            {errores.stock && 
                            <p style={{ color: 'red' }}>{errores.stock}</p>}
                </div>
            </div>
            <br />
             <div className="row">
                <div className="col-6">
                    <label>Imagen URL:</label>
                </div>
                <div className="col-6">
                        <input
                            type="text"
                            name="img"
                            value={product.img || ''}
                            onChange={handleChange}
                            required/>
                            {errores.img && 
                            <p style={{ color: 'red' }}>{errores.img}</p>}
                </div>
            </div>            
           
        </form>
    );
});

export default FormularioProducto;