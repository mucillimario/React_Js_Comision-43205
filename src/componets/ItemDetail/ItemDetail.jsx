import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

//Importamos el CarritoContext: 
import { CarritoContext } from '../../context/CarritoContext'
//Importamos el useContext: 
import { useContext } from 'react';

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
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  return (

    <div className='contenedorItemDetalle'>
      <div>
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

      </div>
    </div>

  )
}

export default ItemDetail


