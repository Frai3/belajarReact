import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { React } from 'react';

function NavigationHeader() {
    return(
        <header>
            <div id="header">
              <div className="logo">
                <a href="/">
                  <img src="PGRI.png" />
                </a>
              </div>
              <nav className="navigation">
                  <ul>
                    <li><a href="/" >Home</a></li>
                    <li><a href="./about">About</a></li>
                    <li><a href="./portofolio">Portofolio</a></li>
                    <li><a href="#">Contact</a></li>
                    <li></li>
                  </ul>
                </nav>
            </div>
      </header>
    );
}

export default NavigationHeader;