import React from "react";
import {NavLink} from "react-router-dom";

export class Menu extends React.Component {
    render() {
        return (<div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
                <div className="site-wrap">
                    <div className="py-2 bg-light">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-3 text-right">
                                    <NavLink to="login.html" className="small mr-3"> Log In</NavLink>
                                    <NavLink to="register.html"
                                             className="small btn btn-primary px-4 py-2 rounded-0">Register</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
                            <div className="container">
                                <div className="d-flex align-items-center">
                                    <div className="site-logo">
                                        <NavLink to="/" className="d-block">
                                            <img src="images/logo.jpg" alt="Image" className="img-fluid"/>
                                        </NavLink>
                                    </div>
                                    <div className="mr-auto">
                                        <nav className="site-navigation position-relative text-right" role="navigation">
                                            <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                                <li>
                                                    <NavLink to="/" className="nav-link text-left">Home</NavLink>
                                                </li>
                                                <li className="has-children">
                                                    <ul className="dropdown">
                                                        <li><NavLink to="/single">Single</NavLink></li>
                                                        <li><NavLink to="/about">About</NavLink></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <NavLink to="/service"
                                                             className="nav-link text-left">Service</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/post" className="nav-link text-left">Post</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/contact"
                                                             className="nav-link text-left">Contact</NavLink>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



