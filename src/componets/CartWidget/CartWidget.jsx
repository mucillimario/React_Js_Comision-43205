import "./CartWidget.css"
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div className="carroEstilos">
      <Link style={{textDecoration:"none"}} to='/cart'>
      <i class="bi bi-cart3"></i>
        {
          cantidadTotal > 0 && <strong className='notificacion'> {cantidadTotal} </strong>
        }
      </Link>
    </div>
  )
}


// const CartWidget = () => {
//   return (
//     <div className="carroEstilos">
//         <i class="bi bi-cart3"></i>
//         <p className="notificacion">10</p>
//     </div>
//   )
// }


export default CartWidget

