import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'


const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className='contenedorCartDetalle noHayProductos'>
                <div><h2> No hay productos cargados en este carrito</h2></div>
                <div className="btnEstiloAll"><Link to='/'> Ver Productos </Link></div>
            </div>
        )
    }
    return (
        <div className='contenedorCartDetalle'>
            <div className="hayProductos">
                
                {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}

            </div>


            <div className="carritoTotal">

                <h3>Items cargados: {cantidadTotal} </h3>
                <h3 className="cartItemBold">Total: ${total} </h3>


                <div className="carritoTotalBotones">
                <Link to='/checkout'>  <button className="btnEstiloAll btnFinalizar">
                <i class="bi bi-check-lg"></i> Finalizar Compra
                
                    </button>       </Link>

                <button className="btnEstiloAtencion btnVaciarCarro" onClick={() => vaciarCarrito()}>                   <i class="bi bi-trash3 "></i> Vaciar carrito </button>
            </div>

            </div>



        </div>


    )
}

export default Cart

