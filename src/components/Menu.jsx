import React from "react";
import {NavLink} from "react-router-dom";

export class Menu extends React.Component {
    render() {
        return (<div data-spy="scroll" data-target=".site-navbar-target" data-offset="50">
                <div className="container">
                    <div className="container col-12 text-lg-left">
                        <div className="row align-items-center">
                            <div className="col-lg-3 text-lg-right">
                                <NavLink to="/auth" className="mr-5 text-left"> Log In</NavLink></div>
                            <div className="col-lg-3 text-lg-right">
                                <NavLink to="/register" className="mr-5 text-left">Register</NavLink></div>
                            <div className="col-lg-3 text-lg-right">
                                <NavLink to="/userpage" className="mr-2 text-left">Profile</NavLink></div>
                            <div className="col-lg-3 text-lg-right">
                                <NavLink to="/contact" className="nav-link text-left">Contact</NavLink></div>
                        </div>
                    </div>
                </div>

                <div className="site-navbar m-0 py-4 js-sticky-header site-navbar-target" role="banner">
                    <div className="container">
                        <div className="d-flex align-items-center">
                            <div className="site-logo">
                                <NavLink to="/" className="d-block">
                                    <img src="images/logo.jpg" alt="Image" className="img-fluid"/>
                                </NavLink>
                            </div>
                            <div className="m-0 mr-auto">
                                <nav className="site-navigation position-relative text-lg-left" role="navigation">
                                    <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                        <li>
                                            <NavLink to="/" className="nav-link text-left">Home</NavLink>
                                            <NavLink to="/single">Single</NavLink>
                                            <NavLink to="/about">About</NavLink>
                                            <NavLink to="/service" className="nav-link text-left">Service</NavLink>
                                            <NavLink to="/post" className="nav-link text-left">Post</NavLink>
                                            <NavLink to="/blog" className="nav-link text-left">Blog</NavLink>
                                        </li>
                                    </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}



