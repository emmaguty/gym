import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand bg-dark">
                <NavLink to="/" className="navbar-brand">
                    GART GYM
                </NavLink>
            </nav>
        </>
    )
}

export default Navbar;