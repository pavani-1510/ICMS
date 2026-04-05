import React from "react";
import { NavLink } from "react-router-dom";
//import Font-Awesome form "Font-Awesome";

const Artistic = () => {
    return (
        <div>
            <section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">
                                Types of Artistic Cultures in India
                            </h3>
                            <h1 className="display-6 text-center mb-4">
                                <b>Art Forms </b>
                            </h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="card p-3">
                                <div className="card-body text-center">
                                    <i class="fa fa-group fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">
                                        Dance
                                    </h5>
                                    <p className="card-text lead">
                                        India has several classical dance forms, including Bharatanatyam, Kathak, Kathakali, Odissi, and Manipuri. These dance forms often depict stories from Hindu mythology and have intricate footwork and hand gestures.
                                    </p>
                                    <NavLink to="/services/artistic/dance" href="#" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                                        Find out
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card p-3">
                                <div className="card-body text-center">
                                    <i className="fa fa-paint-brush fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">
                                        Music
                                    </h5>
                                    <p className="card-text lead">
                                        Classical music traditions like Hindustani (North Indian) and Carnatic (South Indian) music are highly developed. Instruments like the sitar, tabla, and flute are commonly used. Bollywood music is also popular worldwide.

                                    </p>
                                    <NavLink to='/services/artistic/music' href="#" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                                        Find out
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="card p-3">
                                <div className="card-body text-center">
                                    <i className="fa fa-language fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">
                                        Visual arts
                                    </h5>
                                  
                                    <p className="card-text lead">
                                        Visual arts refer to a broad category of artistic expressions that primarily rely on visual elements to convey meaning, emotions, or aesthetics. These elements can include lines, shapes, colors, forms, textures, and space.

                                    </p>
                                    <NavLink to='/services/artistic/visualarts' href="#" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                                        Find out
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card p-3">
                                <div className="card-body text-center">
                                    <i className="fa fa-language fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">
                                        Crafts and textiles
                                    </h5>
                                    <p className="card-text lead">
                                        India has a rich tradition of crafts and textiles that date back thousands of years. These crafts and textiles vary greatly across different regions of the country and are often influenced by the local culture, history, and climate.
                                    </p>
                                    <NavLink to='/services/artistic/craftstextiles' href="#" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                                        Find out
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Artistic;