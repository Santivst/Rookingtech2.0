import './NavBar.css';

import {Link} from "react-router-dom"

import CardWidget from "../CartWidget/CardWidget";

function NavBar({title}) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Inicio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/category/Smartphones">Phones</Link></li>
                                <li><Link className="dropdown-item" to="/category/Computadoras">Computers</Link></li>
                                <li><Link className="dropdown-item" to="/category/Audio">Audio</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">
                                Acerca de Nosotros
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                            Contacto
                            </Link>
                        </li>
                        <li className="nav-item">
                            <CardWidget cartCount={6} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar