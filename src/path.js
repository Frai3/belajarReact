import React from "react";
import About from './tes/about';
import BeritaBoruto from './berita/boruto';
import Berita from "./berita/berita";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const Path = () => {
    return <div>
        <Router>
            <Route path="/" exact component={About} />
            <Route path="/about" component={About} />
            <Route path="/boruto" component={BeritaBoruto} />
            <Route path="/berita" component={Berita} />
        </Router>
    </div>
}

export default Path;