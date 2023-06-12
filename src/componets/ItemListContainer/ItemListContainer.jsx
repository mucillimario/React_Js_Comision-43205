 import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'

//Importamos funciones de firebase: 
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db_firebase } from '../../services/config';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect( () => {
    const misProductos = idCategoria ? query(collection(db_firebase, "inventarioLego"), where("idCat", "==", idCategoria)) : collection(db_firebase, "inventarioLego");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))
  }, [idCategoria])

  return (
    <>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer