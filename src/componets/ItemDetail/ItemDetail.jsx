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

const ArrowBackNavegador= () => {
  navigate(-1)
  
}
  return (

    <div className='contenedorItemDetalle'>
      <div>



      <button onClick={ArrowBackNavegador}>
      <i class="bi bi-0-circle-fill"></i>
      <i class="bi bi-cart3" ></i>
      <i class="bi bi-cart3"></i>
      <i class="bi bi-cart3"></i>
      <i class="bi bi-arrow-left-circle-fill"></i>
      <i class="bi bi-arrow-left-circle"></i>
      <i class="bi bi-x-square-fill"></i>
      <i class="bi bi-trash3"></i>
      <i class="bi bi-trash3-fill"></i>

      </button>


        <img className="detalleImg" src={img} alt={nombre} />
      </div>
      <div className="detalleTexto">
        <h2 className="nombreDetalle"> {nombre} </h2>
        <h3 className="sku_stockDetalle">Sku: {sku} </h3>
        <p className="sku_stockDetalle">Disponibles: {stock} </p>
        <h3 className="precioDetalle">$: {precio} </h3>
        <p className="detalleDetalle">{detalle} </p>
        {agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>)
          : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)}
        <br />
        <a href="/"> Quiero ver otros productos, no quiero este </a>
        <a href="/"> volver a la categoria </a>

      </div>
    </div>

  )
}

export default ItemDetail


