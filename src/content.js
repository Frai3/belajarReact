import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Content() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="imgContent">
                        <a href='./boruto'>
                            <img src="Boruto.jpg" />
                        </a>
                    </div>
                </div>
                <div className="col">
                    <div className="d-flex flex-column bd-highlight mb-3">
                        <div className="p-2 bd-highlight">
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
                        <div className="p-2 bd-highlight">
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