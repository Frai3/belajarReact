import React from "react";
import About from './tes/about';
import BeritaBoruto from './berita/boruto';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

const Path = () => {
    return <div>
        <Router>
            <Switch>
                {/* <Route path="/" component={Home} /> */}
                <Route path="/about" component={About} />
                <Route path="/boruto" component={BeritaBoruto} />
            </Switch>
        </Router>
    </div>
}

export default Path;