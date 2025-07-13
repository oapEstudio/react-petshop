import React, { useRef, cloneElement } from 'react';

const Modal = ({title,children,id = 'exampleModal',titleButtonLeft = "Guardar"}) => {

    let props = {tabIndex: -1} ;

    const childRef = useRef(null);

    const handleClick = () => {
        childRef.current?.submit();
    };

    const childrenWithRef = React.isValidElement(children)
    ? cloneElement(children, { ref: childRef })
    : children;

  return (
    <>
        <div className="modal fade" id={id} {...props} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {childrenWithRef}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" className="btn btn-primary" onClick={handleClick }>{titleButtonLeft}</button>
                </div>
                </div>
            </div>
        </div>
    </>
  )
};

export default Modal;
