import React from "react";
import {host} from "../config";

export class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            pass: "",
            info_ok: "",
        }
        this.sendForm = this.sendForm.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    sendForm(event) {
        {/* event.preventDefault() - Изменяем поведение браузера по умолчанию */}
        event.preventDefault();
        const formData = new FormData();
        formData.append("email", this.state.email);
        formData.append("pass", this.state.pass);
        fetch(host+"/registration", {
            credentials: 'include',
            method: "POST",
            body: formData
        }).then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.result === "success") {
                    this.setState({
                        info_ok: "Регистрация прошла успешно. Выполните вход."
                    })
                } else {
                    this.setState({
                        info_ok: "Пользователь с таким email уже существует. Используйте другой email."
                    })
                }
            })
    }

    render() {
        return (<div className="col-md-5 m-5 mx-auto ">
                <form className="m-5" onSubmit={this.sendForm}>
                    <h1 className="text-center m-5 pt-5 my-3 ">Регистрация на сайте</h1>
                    <div className="mb-3">
                        <input name="email" type="email" value={this.state.email} onChange={this.handleInput}
                               className="form-control" placeholder="E-mail"/>
                </div>
                <div className="mb-3">
                    <input name="pass" type="password" value={this.state.pass} onChange={this.handleInput}
                           className="form-control" placeholder="Пароль"/>
                </div>
                <div className="mb-3">
                    <input type="submit" className="form-control btn btn-primary" value="Зарегистрироваться"/>
                    <p className="text-center my-3" style={{color: "green"}}>{this.state.info_ok}</p>
                </div>
            </form>
        </div>
        )
    }
}