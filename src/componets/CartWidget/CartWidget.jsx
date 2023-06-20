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

export default CartWidget

