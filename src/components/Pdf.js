import React from 'react';



const Pdf = ({estado, pago, apellido, direccion}) => {
    return(
        <>

            <p>Name: {estado}</p>
            <p>Apellido: {apellido}</p>
            <p>Domicilio: {direccion}</p>
            <p>Monto a pagar: {pago}</p>




        </>
    )
}

export default Pdf;