import React from "react";
import Services from "./Services";
import Contact from "./Contact";
import homeimage from "./images/home.jpg";

import { NavLink } from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <section id="home">
                    <div className="row  justify-content-center" >
                        
                        <img src={homeimage}  ALIGN="left" alt="INDIAN CULTURE MANAGEMENT SYSTEM" style={{ width: '1700px', height: '700px' }} />

                            </div>
                            <div>
                            <h1 className="display-4 fw-bolder mb-4 text-center mt-5">
                                India is not a nation, nor a country. It is a subcontinent of nationalities.
                            </h1>
                            <p className="lead text-center fs-4 mb-5">
                            Indian Culture Management System is a web-based platform that aims to preserve, promote, and manage various aspects of Indian 
                            culture and heritage. It provides comprehensive information about Indian traditions, art forms, festivals, historical sites, and 
                            cultural events. The system aims to raise awareness about Indian culture, provide educational resources, and facilitate cultural 
                            exchange among people from diverse backgrounds.

                            </p>
                            
                            </div>
                            <div className="container">
                            <div className="row  justify-content-center" >
                        <div className="col-md-8 mt-5">
                            <div className="buttons d-flex justify-content-center px-4 py-4">
                                <NavLink to="/contact" className="btn btn-light me-4
                                rounded-pill px-4 py-2">Get Quote</NavLink>
                                <NavLink to="/services" className="btn btn-light me-4
                                rounded-pill px-4 py-2">
                                    Our Services
                                </NavLink>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Services/>
            <Contact/>
        </div>
    );
}

export default Home;