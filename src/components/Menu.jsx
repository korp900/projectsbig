import React from "react";

export class Menu extends React.components{
    render(){
        return (
            <div className="site-wrap">
                <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>
                <div className="py-2 bg-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-9 d-none d-lg-block">
                                <a href="#" className="small mr-3">
                                    <span className="icon-question-circle-o mr-2"></span> Have a questions?</a>
                                <a href="#" className="small mr-3">
                                    <span className="icon-phone2 mr-2"></span> 10 20 123 456</a>
                                <a href="#" className="small mr-3"><span
                                    className="icon-envelope-o mr-2"></span> info@mydomain.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
                    <div className="container">
                        <div className="d-flex align-items-center">
                            <div className="site-logo">
                                <a href="index.html" className="d-block">
                                    <img src="/images/logo.png" alt="Image" className="img-fluid"/>
                                </a>
                            </div>
                            <div className="mr-auto">
                                <nav className="site-navigation position-relative text-right" role="navigation">
                                    <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                        <li className="active">
                                            <a href="index.html" className="nav-link text-left">Home</a>
                                        </li>
                                        <li>
                                            <a href="about.html" className="nav-link text-left">About</a>
                                        </li>
                                        <li className="has-children">
                                            <a href="services.html" className="nav-link text-left">Services</a>
                                            <ul className="dropdown">
                                                <li><a href="services.html">Investment Bonds</a></li>
                                                <li><a href="services.html">Investment Management</a></li>
                                                <li><a href="services.html">Financial Funds</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="blog.html" className="nav-link text-left">Blog</a>
                                        </li>
                                        <li>
                                            <a href="contact.html" className="nav-link text-left">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
        )
    }
}



