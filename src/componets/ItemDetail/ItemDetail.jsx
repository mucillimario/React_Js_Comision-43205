import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

//Importamos el CarritoContext: 
import { CarritoContext } from '../../context/CarritoContext'
//Importamos el useContext: 
import { useContext } from 'react';

// navegecion hacia atras




const ItemDetail = ({ id, sku, nombre, precio, img, stock, detalle }) => {

  //1) Creamos un estado con la cantidad de productos agregados. 
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  //useContext: 
  const { agregarProducto } = useContext(CarritoContext);

  //2)Creamos una función manejadora de la cantidad: 
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    // console.log("Productos Agregados:" + cantidad);

    //Ahora acá creo un objeto con el item y la cantidad:
    const item = { id, nombre, precio, img };
    agregarProducto(item, cantidad);
  }

  const navigate = useNavigate();

  const ArrowBackNavegador = () => {
    navigate(-1)
  }

  const ArrowBackSeguirComprando = () => {
    navigate(-0)
  }
  return (

    <div className='contenedorItemDetalle'>
      <div className='volver_img'>
            <button className="flechaVolver" onClick={ArrowBackNavegador}>
              <i class="bi bi-arrow-left-circle"></i>
            </button>
            <img className="detalleImg" src={img} alt={nombre} />
      </div>

      <div className="detalleTexto">
          <h2 className="nombreDetalle"> {nombre} </h2>

          <p className="sku_stockDetalle">Disponibles: {stock} </p>
          <h3 className="precioDetalle">$: {precio} </h3>
          <h className="detalleDetalle">{detalle} </h>
          <h3 className="sku_stockDetalle">Sku: {sku} </h3>

<div className="Terminar">
{agregarCantidad > 0 ? (<Link className="btnEstiloAll" to="/cart"> 
<i className="bi bi-bag-plus"></i>
            Terminar Compra </Link>)
            : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)}

</div>
          

<div className="itemDetailBotones">


  

<button className="btnEstiloAll" onClick={ArrowBackNavegador}>
<i className="bi bi-eye"></i> Quiero otros productos
            </button>

</div>



      </div>
    </div>

  )
}

export default ItemDetail


