import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import './CartItem.css'

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);
  return (


      <div className="contenedorCartItem">
        <div className="cartItemImg">
          <img className="img_cart" src={item.img} alt="" />
        </div>
        <div className="cartItemDatos">
          <h4> {item.nombre} </h4>
          <div className="cartItemCantPrecio">
          <p>Cantidad: {cantidad} </p>
          <p>Precio: {item.precio} </p>
          </div>
          <button className="miBtn" onClick={() => eliminarProducto(item.id)}> Eliminar </button>
        </div>

      </div>

  
)


}


export default CartItem