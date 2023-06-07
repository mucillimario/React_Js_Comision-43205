//estilos
import './App.css';
//BS
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './componets/Header/Header';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Link, NavLik } from "react-router-dom";
// import ItemList from './componets/ItemList/ItemList';
import Checkout from './componets/Checkout/Checkout';
import { CarritoProvider } from './context/CarritoContext';



function App() {
  return (
    <>
      <CarritoProvider>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/checkout' element={ <Checkout/>} />
        </Routes>
      </BrowserRouter>
      </CarritoProvider>
    </>
  );
}

export default App;


