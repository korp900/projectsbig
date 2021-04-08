import React from "react";
import {NavLink} from "react-router-dom";

export class AdminMenu extends React.Component{
    render(){
        return (<div><nav className="site-navigation position-relative text-right" role="navigation">
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                    <li className="active">
                        <NavLink to="/" className="nav-link text-left">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="nav-link text-left">About</NavLink>
                    </li>
                    <li className="has-children">
                        <NavLink to="/service" className="nav-link text-left">Service</NavLink>
                        <ul className="dropdown">
                            <li><NavLink to="/userpage">Cabinet</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/blog" className="nav-link text-left">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="nav-link text-left">Contact</NavLink>
                    </li>
                    <li className="has-children">
                        <NavLink to="/main" className="nav-link text-left">main</NavLink>
                        <ul className="dropdown">
                            <li><NavLink to="/tax">tax</NavLink></li>
                            <li><NavLink to="/addpost">addpost</NavLink></li>
                            <li><NavLink to="/addbuy">addbuy</NavLink></li>
                            <li><NavLink to="/addsell">addsell</NavLink></li>
                            <li><NavLink to="/single">single</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            </div>
        )
    }
}



