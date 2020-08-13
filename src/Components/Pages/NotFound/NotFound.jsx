import React from 'react'

import { Link } from 'react-router-dom'; 

const NotFound = () => {
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-md-12">
                    <div className="error-template mb-2">
                        <h1>Ops!</h1>
                        <h2>Error 404 Not Found</h2>
                        <div className="error-details mb-4">
                            Sorry, an error occurred, The requested page was not found.!
                        </div>
                        <div className="error-actions">
                            <Link className="btn btn-outline-primary btn-lg mb-3" to="/">
                                <i className="fa fa-home" />&nbsp;Back To Main
                            </Link>
                            <Link className="btn btn-outline-secondary btn-lg mb-3 ml-2">
                                <i className="fa fa-envelope" />&nbsp;Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default NotFound
