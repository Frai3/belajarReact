import './App.css';
import NavigationHeader from './navigationHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import { React } from 'react';

import Home from './tes/home';
import About from './tes/about';
import BeritaBoruto from './berita/boruto';
import Berita from "./berita/berita";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


const App = () => {
  return(
  <Router>
    <NavigationHeader />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/boruto" component={BeritaBoruto} />
      <Route path="/berita" component={Berita} />
    </Switch>
  </Router>    
  );
}

export default App;
