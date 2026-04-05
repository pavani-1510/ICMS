import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () =>{
    return(
        <div>
            <footer className="footer text-white bg-primary">
                <div className="container">
                    <footer className="py-5">
                        <div className="row">
                            <div className="col-2">
                                <h5>Section</h5> 
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <NavLink to='/' className="nav-link p-0 text-white">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav-item mb-2">
                                    <NavLink to='/services' className="nav-link p-0 text-white">
                                            Services
                                        </NavLink>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <NavLink to='#' className="nav-link p-0 text-white">
                                            FAQs
                                        </NavLink>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <NavLink to='/contact' className="nav-link p-0 text-white">
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            </div>
                        </footer>
                    </div>
            </footer>
        </div>

    );
}

export default Footer;
