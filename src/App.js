import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { React } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

//Header & Footer
import NavigationHeader from './navigationHeader'
import Footer from "./footer"

//Navbar
import Home from './navBar/home';
import About from './navBar/about';

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
      <div className="background">
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      </div>
      {/* Konten Berita */}
      <Route path="/boruto" component={Boruto} />
      <Route path="/sarada" component={Sarada} />
      <Route path="/kawaki" component={Kawaki} />
      <Route path="/mitsuki" component={Mitsuki} />
    </Switch>
    <Footer />
  </Router>    
  );
}

export default App;
