import React from 'react'

import './Footer.css';
import Column from './Column/Column';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem, ipsum.</h4>
                            <ul className="list-unstyled">
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                            </ul>
                        </div>
                        <Column colClass="col-md-3 col-sm-6" />
                        <Column colClass="col-md-3 col-sm-6" />
                        <Column colClass="col-md-3 col-sm-6" />
                        <div className="footer-bottom">
                            <p className="text-xs-center">
                                &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
