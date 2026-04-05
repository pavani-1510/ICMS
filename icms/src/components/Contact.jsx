import { useNavigate } from "react-router-dom";
import React, { useState } from "react";


const Contact = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        message: ""
    });


    return (
        <div>
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs--=5 text-center mb-0">Wanna Update us!!</h3>
                            <h1 className="display-6 text-center mb-4">
                                <b>
                                    Share your information about Culture or website
                                </b>
                            </h1>

                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="./contactimg.jpg" 
                            alt="Contact" 
                            className="w-75" />
                        </div>
                        <div className="col-md-6">
                            <form action="" >
                                <div class="mb-3">
                                    <label 
                                        for="exampleFormControlInput1" 
                                        class="form-label">Email address</label>
                                    <input 
                                        type="email" 
                                        class="form-control" 
                                        id="exampleFormControlInput1" 
                                        placeholder="name@example.com" 
                                        />
                                </div>
                                <div class="mb-3">
                                    <label 
                                        for="exampleFormControlTextarea1" 
                                        class="form-label">Suggestions and complaints</label>
                                    <textarea 
                                        class="form-control" 
                                        id="exampleFormControlTextarea1" 
                                        rows="3"></textarea>
                                </div>
                                <a href="#" class="btn btn-primary">
                                    Send Message<i className="fa fa-paper-plane "></i>
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;