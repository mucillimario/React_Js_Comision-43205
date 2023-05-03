import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListoContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={`Bienvenidos a la web de lego realizada en React Js`} />
      </div>
  );
}

export default App;
