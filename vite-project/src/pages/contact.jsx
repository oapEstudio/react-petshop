import FOOTER from "../components/static/footer";
import HEADER from "../components/static/header";
import CONTAINER from "../components/static/container";
import { COLOR_PETSHOP } from "../constant/constant";

const CONTACT = () => {
    return (
        <>
            <CONTAINER >
                <br />
                 <main>
                    <div >
                        <h1 className="display-3">CONTACTO</h1> 
                       
                    </div>
                   <br />
                    <section className="mb-4">

                    
                        <p className="text-center w-responsive mx-auto mb-5">Tienes alguna consulta?. Envianos un mensaje...</p>

                        <div className="row" style={{marginLeft: '15%'}}>

                        
                        <div className="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" >

                                
                                <div className="row">

                                    
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <label for="name" className="">Nombre</label>
                                            <input type="text" id="name" name="name" className="form-control"/>                                   
                                        </div>
                                    </div>                                    
                                    
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                             <label for="email" className="">Correo electronico</label>
                                            <input type="text" id="email" name="email" className="form-control"/>                                           
                                        </div>
                                    </div>
                                    

                                </div>
  
                                <div className="row">

                                    
                                    <div className="col-md-12">

                                        <div className="md-form">
                                            <label for="message">Mensaje</label>
                                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>                                    
                                        </div>

                                    </div>
                                </div>
                                

                            </form>
                            <br />
                            <br />
                            <div className="text-center text-md-left">
                                <a data-mdb-ripple-init className="btn"  
                                    style={{ backgroundColor: COLOR_PETSHOP}}  
                                    onClick={()=>{alert("Formulario enviado correctamente");}}>Enviar</a>
                            </div>
                            <div className="status"></div>
                        </div>
                    

                        </div>

                    </section>

                </main>   
            </CONTAINER>
                
           
        </>
    );
}
export default CONTACT;