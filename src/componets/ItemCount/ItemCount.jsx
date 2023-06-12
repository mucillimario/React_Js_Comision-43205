import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div className="contadores">
                <button className="btnContadores" onClick={decrementar}> <i class="bi bi-dash-square-fill"></i> </button>
                <h3> {contador} </h3>
                <button className="btnContadores" onClick={incrementar}> <i class="bi bi-plus-square-fill"></i> </button>
            </div>
            <div className="agregar">

                <button
                    className="btnAccion" onClick={() => funcionAgregar(contador)}>
                    <i class="bi bi-bag-plus"></i> Agregar al Carrito </button>
            </div>


        </>
    )
}

//Incrementar y decrementar van sin parentesis porque si no se ejecutarían al momento de renderizar el componente. Y solo queremos que se ejecute cuando el visitante haga click en los botones. 

export default ItemCount