import './App.css';
import NavigationHeader from './navigationHeader'
import Content from './content';
import 'bootstrap/dist/css/bootstrap.min.css';
import GambarDashboard from './gambarDashboard';
import { React } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div>
      <NavigationHeader />
      <GambarDashboard />
      <br />
      <Content />
      <br />
    </div>
  );
}

export default App;
