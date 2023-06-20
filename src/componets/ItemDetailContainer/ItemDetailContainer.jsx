import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

//firebase
import { getDoc, doc } from "firebase/firestore";
import { db_firebase } from '../../services/config';


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const { idItem } = useParams();

    useEffect(() => {
        const nuevoDoc = doc(db_firebase, "inventarioLego", idItem);

        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data();
                const nuevoProducto = { id: res.id, ...data }
                setProducto(nuevoProducto);
            })
            .catch(error => console.log(error))
    }, [idItem])

    console.log(producto)

    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer