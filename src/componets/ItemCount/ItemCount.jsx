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
        <> <div className="itemCountBotones">

<div className="div_contadores">
                <button onClick={decrementar}> <i class="bi bi-dash-square"></i> </button>
                <h3> {contador} </h3>
                <button onClick={incrementar}> <i class="bi bi-plus-square"></i> </button>
            </div>
            {/* <div className="div_agregar"> */}
                <button
                    className="btnEstiloAll btnAgregarCarro" onClick={() => funcionAgregar(contador)}>
                    <i className="bi bi-bag-plus"></i> Agregar al Carrito
                </button>
            {/* </div> */}
        </div>



        </>
    )
}

//Incrementar y decrementar van sin parentesis porque si no se ejecutarían al momento de renderizar el componente. Y solo queremos que se ejecute cuando el visitante haga click en los botones. 

export default ItemCount