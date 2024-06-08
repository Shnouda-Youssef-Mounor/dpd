import { NavLink } from "react-router-dom";

const Navbar = ()=>{
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-success ps-5">
            <div className="container-fluid">
                <NavLink className="navbar-brand navbar-text" to="/"><font className="text-light">DPD</font></NavLink>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link active text-light btn" to="/dpd/" spy={true} activeClass="active" aria-current="page" smooth={true} offset={-100} duration={500}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link text-light btn" to='/dpd/Diagnose-Treat' spy={true} activeClass="active" smooth={true} offset={-100} duration={500}>Diagnose && Treat</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link text-light btn" to="/dpd/About" spy={true} activeClass="active" smooth={true} offset={-100} duration={500}>About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link text-light btn" to="/dpd/Contact-us" spy={true} activeClass="active" smooth={true} offset={-100} duration={500}>Contact us</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
}
export default Navbar;
