import React from "react";
import { NavLink } from "react-router-dom";
//import Font-Awesome form "Font-Awesome";

const Services = () =>{
    return (
        <div>
            <section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">
                            Types of Indian Cultures in India
                            </h3>
                            <h1 className="display-6 text-center mb-4">
                                <b>Cultures of India </b>
                            </h1>
                            <hr className="w-25 mx-auto"/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="card p-3">
                                <div className="card-body text-center">
                                   <i class="fa fa-group fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">
                                        Festival culture
                                    </h5>
                                    <p className="card-text lead">
                                    Festivals encompasses a wide range of celebrations, often tied to cultural, religious, or seasonal events.
                                    </p>
                                    <NavLink to="/services/festive/" href="#" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                                        Find out
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3">
                                <div className="card-body text-center">
                                   <i className="fa fa-paint-brush fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">
                                        Artistic culture
                                    </h5>
                                    <p className="card-text lead">
                                    Artistic culture is a rich and diverse expression of human creativity across various forms of art.                     
                                    </p>
                                    <NavLink to="/services/artistic/" href="#" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                                        Find out
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3">
                                <div className="card-body text-center">
                                   <i className="fa fa-map-marker fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">
                                        Heritage culture
                                    </h5>
                                    <p className="card-text lead">
                                    Heritage culture in India is a rich tapestry woven from centuries of history, traditions, and cultural diversity.
                                    </p>
                                    <NavLink to="/services/heritage/" href="#" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                                        Find out
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="card p-3">
                                <div className="card-body text-center">
                                   <i className="fa fa-language fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">
                                    Language & literature culture
                                    </h5>
                                    <p className="card-text lead">
                                    India's language & literature culture is a vibrant tapestry encompassing various languages, dialects, and literary traditions.
                                        </p>
                                        <NavLink to="/services/languageliterature/" href="#" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                                        Find out
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3">
                                <div className="card-body text-center">
                                   <i className="fa fa-plus fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">
                                        Religious culture
                                    </h5>
                                    <p className="card-text lead">
                                    India's religious culture is a tapestry woven from the threads of diverse faiths, beliefs, and spiritual traditions.
                                    </p>
                                    <NavLink to="/services/religious/" href="#" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                                        Find out
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3">
                                <div className="card-body text-center">
                                   <i className="fa fa-history fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">
                                        Historic culture
                                    </h5>
                                    <p className="card-text lead">
                                    India's historical culture is a complex tapestry that combines centuries of civilization, traditions, and influences.
                                    </p>
                                    <NavLink to="/services/historic/" href="#" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
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

export default Services;