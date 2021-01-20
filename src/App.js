import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {NavBar} from "./components/navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
