import React from "react";
import { Link } from 'react-router-dom';

import Input from './Input/Input';

const Contact = () => {
    return (
        <div>
            <section className="py-5 my-5">
                <div className="container">
                    <div className="well well-sm">
                        <h3>
                            <strong>Our Location</strong>
                        </h3>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14476.719576389934!2d67.04633362060922!3d24.891844709071872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33efe930d3ee3%3A0xe9636f3aad53fc5b!2sPIB%20Colony%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1593069636305!5m2!1sen!2s"
                                style={{
                                    border: '0',
                                    width: '100%',
                                    height: '315px',
                                    frameBorder: '0'
                                }}
                                allowFullScreen
                                title="mainMap"
                            ></iframe>
                        </div>
                        <div className="col-md-5">
                            <h4><strong>Contact Us</strong></h4>
                            <form action="">
                                <div className="form-group">
                                    <Input element="input" type='text' className='form-control mb-2' placeholder='Name'/>
                                    <Input element="input" type='email' className='form-control mb-2' placeholder='Email'/>
                                    <Input element="input" type='tel' className='form-control mb-2' placeholder='Phone'/>
                                    <Input element="textarea" type='text' cols='30' rows='3' className='form-control mb-2' placeholder='Message'/>
                                    <Link style={{width: '100%'}} className="btn btn-outline-primary text-uppercase"> 
                                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i> 
                                    &nbsp;&nbsp;Send</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
