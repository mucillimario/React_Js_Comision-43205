import './Item.css'
import { Link } from 'react-router-dom'


// Funcion que formatea numero a moneda.

function formatoMoneda(moneda) {
  return '$ ' + moneda.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}


const Item = ({ id, sku, nombre,precioOFF, precio, img, stock }) => {
  return (
    <div className='cardProducto'>
      <div className="cardImg">
        <img className='imgProducto' src={img} alt={nombre} />
      </div>
      <div className="cardDatosTodos">
        <div className="cardDatosTitulo">
          <h3 className="nombre">{nombre} </h3>

          <p className="sku_stock">Stock: {stock} unidades </p>
        </div>
        <div className="cardDatosOFF">
        <p className="precioOFF">{formatoMoneda(precioOFF)} </p>            
        <p className="off"> %25</p>
        </div>
        {/* <p className="precio">$ {precio} </p> */}
        <p className="precio">{formatoMoneda(precio)} </p>
        
        <p className="sku_stock">Sku: {sku} </p>
        <div className="CarDatosVerMas">
          <Link className="btnEstiloAll"to={`/item/${id}`}> Ver detalles </Link>

        </div>
      </div>
    </div>
  )
}

export default Item
