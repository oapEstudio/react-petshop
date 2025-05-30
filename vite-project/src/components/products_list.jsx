import PRODUCTS from "./products";

const PRODUCTS_LIST = ({products, addCart})=>{

    return (
        <>
            <h2 className="display-4">Galeria de productos</h2>
           <br />
            <section>
                 <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product=>{
                            return (
                                <div key={'div_product_' + product.id} className="col">
                                    <PRODUCTS addCart={addCart} key={product.id} product={product} />
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