import React, {useState} from 'react';
import './formulario.css';
import Pdf from "./Pdf";

const Formulario = () => {
    const handleSubmit= (e) => {
        e.preventDefault();

    }

    const [nombre, setNombre]= useState()
    const [apellido, setApellido]= useState()
    const [pago, setPago]= useState()
    const [direccion, setDireccion]= useState()

    const onChange= (e) => {
        setNombre(e.target.value);
    }

    const onApellido= (e) => {
        setApellido(e.target.value);
    }

    const onPago= (e) => {
        setPago(e.target.value);
    }

    const onDireccion= (e) => {
        setDireccion(e.target.value);
    }

    const onMostrar= (e) => {
        setNombre(e.target.value)

    }
    return(
        <>
            <div className={'container-form'}>
                <form onSubmit={handleSubmit}>
                    <label> Nombre:
                        <input
                        type={"text"}
                        id={"name"}
                        name={"name"}
                        value={nombre}
                        onChange={onChange}


                        />


                    </label>

                    <label> Apellido:
                        <input
                            type={"text"}
                            id={"lastname"}
                            name={"lastname"}
                            value={apellido}
                            onChange={onApellido}
                        />
                    </label>

                    <label> Direccion:
                        <input
                            type={"text"}
                            id={"direccion"}
                            name={"direccion"}
                            value={direccion}
                            onChange={onDireccion}
                        />
                    </label>


                    <label> Monto a pagar:
                        <input
                            type={"text"}
                            id={"pago"}
                            name={"pago"}
                            value={pago}
                            onChange={onPago}
                        />
                    </label>

                    <button type={"submit"} onClick={onMostrar}>Imprimir PDF</button>
                </form>
                <Pdf estado={nombre}
                     apellido={apellido}
                     pago={pago}
                     direccion={direccion}
                />
            </div>
        </>
    )
}

export default Formulario