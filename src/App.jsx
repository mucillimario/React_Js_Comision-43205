import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componets/Header/Header';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link, NavLik } from "react-router-dom";
import ItemList from './componets/ItemList/ItemList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// function App() {
//   return (

//     <div className="App">
//       <Header/>      
//       <NavBar/>
//       <ItemListContainer greeting={`Bienvenidos a la web de lego realizada en React Js`} />
//       <ItemDetailContainer/>
//       </div>
//   );
// }


export default App;

