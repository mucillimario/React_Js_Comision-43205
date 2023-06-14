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
                <div className="btnInformativo"><Link to='/'> Ver Productos </Link></div>
            </div>
        )
    }
    return (
        <div className='contenedorCartDetalle'>
            <div className="hayProductos">
                {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
                {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
                {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
                {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
                {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
                {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
                
            </div>
            
            <div className="carritoTotal">
<h3>Total: ${total} </h3>
<h3>Cantidad total: {cantidadTotal} </h3>
<button onClick={() => vaciarCarrito()}> Vaciar carrito </button>
<Link to='/checkout'> Finalizar Compra </Link>
</div>
        </div>


    )
}

export default Cart

