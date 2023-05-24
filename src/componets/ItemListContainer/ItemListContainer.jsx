import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {

    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.error(error))
  }, [idCategoria])

  console.log(idCategoria)
  return (
    <>
      {/* <h5 className="tituloGreeting">{greeting}</h5> */}
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer