import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img, detalle}) => {
  return (
    
    <div className='contenedorItemDetalle'>
    <div>
    <img className="detalleImg"src= {img} alt={nombre} />
    </div>
    <div className="detalleTexto">
    <h2 className="nombreDetalle"> {nombre} </h2>
    <h3 className="skuDetalle">Sku: {id} </h3>
        <h3 className="precioDetalle">$: {precio} </h3>
        <p className="detalleDetalle">{detalle} </p>

    </div>


    </div>
  )
}

export default ItemDetail