import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { API } from "../constant/constant";

export const AdminContext = createContext();



export const AdminProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(null)
    const [openEdit, setOpenEdit] = useState(false)
   
    useEffect(() => {
        fetch(API)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(true);
                setLoading(false);
            });
    }, []);

    const getProducts = async () => {
        try {
            const url = new URL(API);

       
            const res = await fetch(url)
            const data = await res.json();

            console.log(data);

            setProducts(data);

        } catch (error) {
            console.log('Error al cargar productos ', error);

        }
    }

    const addProduct = async (producto) => {
        try {
         
                const respuesta = await fetch('https://682e2f0e746f8ca4a47c2dbd.mockapi.io/product', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(producto)
                })
                if (!respuesta.ok) {
                    throw new Error('Error al agregar producto')
                }
                const data = await respuesta.json();

                Swal.fire({
                    title: ":)!",
                    text: "Producto agregado correctamente!",
                    icon: "success"
                });
                addProduct();
                setOpen(false);
 
        } catch (error) {
            console.log(error.message);

        }
    }

    const updateProduct = async (producto) => {
        try {
            const respuesta = await fetch(`${API}/${producto.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(producto)
                })
            if (!respuesta.ok) throw Error('Error al actualizar el producto')
    
                const data = await respuesta.json()
                alert('Producto actualizado correctamente')
    
                setOpenEdit(false)
                setSelected(null)
                    
                getProducts();
        } catch (error) {
            console.log(error.message);

        }
    }

    const deleteProduct = async (id) => {
        const confirmar = window.confirm('Estas seguro de eliminar el producto?')
        if (confirmar) {
            try {
                const respuesta = await fetch(`${API}/${id}`, {
                    method: 'DELETE',
                })
                if (!respuesta.ok) throw Error('Error al eliminar')
                
                Swal.fire({
                    title: ":(!",
                    text: "Producto Eliminado correctamente!",
                    icon: "error"
                });
                getProducts()
            } catch (error) {
                alert('Hubo un problema al eliminar el producto')
            }
        }
    }

    return (
        <AdminContext.Provider value={{
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
        }}>
            {children}
        </AdminContext.Provider>
    )
}