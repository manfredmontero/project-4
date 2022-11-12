import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Menu } from "./components/menu.js";
import MenuList from './components/menu-list'

function App() {
  return (
    <div>
      <Menu /> 
      <MenuList/>
    </div>
  );
}

export default App;
