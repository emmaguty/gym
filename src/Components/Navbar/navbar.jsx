import {NavLink} from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand bg-dark">
                <NavLink to="/" className="navbar-brand">
                    <span>GART</span> GYM
                </NavLink>
                <div>
                    <ul className="navbar-nav">
                        <li className='nav-item'>
                            <NavLink to='/' className="nav-link">
                                Inicio
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/' className="nav-link">
                                Acerca
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/' className="nav-link">
                                Entrenamientos
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/' className="nav-link">
                                Servicios
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;