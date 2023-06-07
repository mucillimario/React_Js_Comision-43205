import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({ id, sku, nombre,precioOFF, precio, img, stock }) => {
  return (
    <div className='cardProducto'>
      <div className="cardImg">
        <img className='imgProducto' src={img} alt={nombre} />
      </div>
      <div className="cardDatosTodos">
        <div className="cardDatosTitulo">
          <h3 className="nombre">{nombre} </h3>
          <p className="sku_stock">Sku: {sku} </p>
          <p className="sku_stock">Disponibles: {stock} </p>
        </div>
        <div className="cardDatosOFF">
        <p className="precioOFF">$ {precioOFF} </p>         
        <p className="off"> %25</p>
        </div>
        <p className="precio">$ {precio} </p>
        <div className="CarDatosVerMas">
          <Link className="verMas"to={`/item/${id}`}> Ver Detalles </Link>
        </div>
      </div>
    </div>
  )
}

export default Item
