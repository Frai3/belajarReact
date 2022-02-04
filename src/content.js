import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Path from './path';


function Content() {
    return (
        <div className="container">
            <Path />
            <div className="row">
                <div className="col">
                    <div className="imgContent">
                        <a href='./boruto'>
                            <img src="Boruto.jpg" />
                        </a>
                        
                    </div>
                </div>
                <div className="col">
                    <div class="d-flex flex-column bd-highlight mb-3">
                        <div class="p-2 bd-highlight">
                            <div className="col">
                                <div className="imgContentLeft">
                                    <img id="Right" src="Mitsuki.jpg" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="imgContentRight">
                                    <img id="Right" src="Sarada.jpg" />
                                </div>
                            </div>
                        </div>
                        <div class="p-2 bd-highlight">
                            <div className="imgContent">
                                <img id="Right" src="Kawaki.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;