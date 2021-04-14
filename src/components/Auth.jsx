import React from 'react';
import {host} from "../config";

export class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pass: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", this.state.email);
        formData.append("pass", this.state.pass);
        fetch(host+"/login", {
            credentials: 'include',
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(result => console.log(result));
    }

    render() {
        return (
            <div className="container">
                <div className="col-sm-5 mx-auto">
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <input value={this.state.email} onChange={this.handleInput} name="email" type="text"
                                   className="form-control" placeholder="login"/>
                        </div>
                        <div className="mb-3">
                            <input value={this.state.pass} onChange={this.handleInput} name="pass" type="password"
                                   className="form-control" placeholder="pass"/>
                        </div>
                        <div className="mb-3 text-center">
                            <input type="submit" value="Войти" className="btn btn-primary"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
