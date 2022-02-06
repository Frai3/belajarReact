import './App.css';
import NavigationHeader from './navigationHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import { React } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

//Navbar
import Portofolio from './tes/portofolio'
import Home from './tes/home';
import About from './tes/about';

//Konten Berita
import Boruto from './berita/boruto';
import Sarada from './berita/sarada';
import Mitsuki from './berita/mitsuki';
import Kawaki from './berita/kawaki';


const App = () => {
  return(
  <Router>
    <NavigationHeader />
    <Switch>
      {/* Navbar */}
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portofolio" component={Portofolio} />
      {/* Konten Berita */}
      <Route path="/boruto" component={Boruto} />
      <Route path="/sarada" component={Sarada} />
      <Route path="/kawaki" component={Kawaki} />
      <Route path="/mitsuki" component={Mitsuki} />
    </Switch>
  </Router>    
  );
}

export default App;
