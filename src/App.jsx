import logo from './logo.svg';
import './App.css';
import Title from "./Components/Title"
import { NavBar } from './Components/NavBar/NavBar';
import ItemListConteiner from './Components/ItemListConteiner/ItemListConteiner';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home';

function App() {
  const menus =["Placas de Video","Procesadores","MothersBoards"]
  return (
    <BrowserRouter className='App'>
    <Title />
    <NavBar  />
    <ItemListConteiner name="Andres"/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/producto' element={<Home/>}/>
      <Route exact path='/contacto' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
