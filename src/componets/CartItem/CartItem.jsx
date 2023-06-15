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
          <div className="hola">
          <h4> {item.nombre} </h4>
          <p>Cantidad: {cantidad} </p>
          <p>Precio: $ {item.precio} </p>
          <p>SubTotal: $ {item.precio * cantidad} </p>
          </div>

<div className="hola2">
<button className="miBtn" onClick={() => eliminarProducto(item.id)}>              <i class="bi bi-x-square-fill"></i>  </button>
                   
{/* <i class="bi bi-cart3" ></i>
        <i class="bi bi-arrow-left-circle-fill"></i>
        <i class="bi bi-arrow-left-circle"></i>

        <i class="bi bi-trash3"></i>
        <i class="bi bi-trash3-fill"></i>
        <i class="bi bi-bag-plus"></i>
        

        <i class="bi bi-check2-circle"></i>
        <i class="bi bi-check-circle"></i>
        <i class="bi bi-check-circle-fill"></i> */}
</div>
        
          </div>
       
        </div>



  
)


}


export default CartItem