import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { React } from 'react';
import Path from './path';

function NavigationHeader() {
    return(
        <header>
            <div id="header">
              <div className="logo">
                <a href="#">
                  <img src="PGRI.png" />
                </a>
              </div>
              <nav className="navigation">
                  <ul>
                    <li><a href="/" exact>Home</a></li>
                    <li><a href="./about">About</a></li>
                    <li><a href="#">Portofolio</a></li>
                    <li><a href="#">Contact</a></li>
                    <li></li>
                  </ul>
                </nav>
            </div>
          <Path />
      </header>
    );
}

export default NavigationHeader;