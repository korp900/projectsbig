import React from "react";
import {NavLink} from "react-router-dom";

export class Menu extends React.Component {
    render() {
        return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Финансы</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/auth">Auth</NavLink>
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            <NavLink className="nav-link disabled" to="/userpage" tabIndex="-1"
                                     aria-disabled="true">Profile</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}



