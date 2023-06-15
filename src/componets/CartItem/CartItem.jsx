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
          <div>
          <h1 className="cartItemBold" > {item.nombre} </h1>
          <h4>Cantidad: {cantidad} </h4>
          <h4>Precio: $ {item.precio} </h4>
          <h4 className="cartItemBold">SubTotal: $ {item.precio * cantidad} </h4>
          </div>

<div className="cartItemBtnEliminar">
<button onClick={() => eliminarProducto(item.id)}>              <i class="bi bi-x-square"></i>  </button>
                   
</div>
        
          </div>
       
        </div>



  
)


}


export default CartItem