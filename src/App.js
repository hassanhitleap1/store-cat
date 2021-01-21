import './App.css';
// import $ from 'jquery';
// import Popper from 'popper.js';

import "bootstrap/dist/css/bootstrap.min.css";
import "popper.js";
import 'jquery/dist/jquery.slim.min';
import 'bootstrap/dist/js/bootstrap.min.js'




import {NavBar} from "./components/navbar";

function App() {
  return (
    <div className="App">
        <NavBar />
    </div>
  );
}

export default App;
