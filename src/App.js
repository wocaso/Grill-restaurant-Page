import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";

//components
import NavBar from "./components/NavBar/NavBar"
import MyrestaurantMainBody from './components/MyrestaurantMainBody/MyrestaurantMainBody';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <MyrestaurantMainBody/>

      
      </BrowserRouter>

    </div>
  );
}

export default App;
