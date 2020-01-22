import React from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom';

export default () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row align-items-center">              
                    <Router>
                    <div className="col-md-4">
                        <span className="copyright">Copyright &copy; Your Website 2019</span>
                    </div>
                    <div className="col-md-4">

                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <Link to="/">
                                    <i className="fa fa-twitter"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/">
                                    <i className="fa fa-facebook-f"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/">
                                    <i className="fa fa-linkedin"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline quicklinks">
                            <li className="list-inline-item">
                                <Link to="/">Privacy Policy</Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/">Terms of Use</Link>
                            </li>
                        </ul>
                    </div>
                    </Router>
                </div>
            </div>
        </footer>
    )
}