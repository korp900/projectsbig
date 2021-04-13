import './App.css';
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {AddPost} from "./components/Admin/AddPost";
import {UserPage} from "./components/Users/UserPage";
import {Post} from "./components/Post";
import {Menu} from "./components/Menu";
import {PageHeader} from "./components/PageHeader";
import {Register} from "./components/Register";
import {Service} from "./components/Service";
import {AddSell} from "./components/Admin/AddSell";
import {About} from "./components/About";
import {Single} from "./components/Single"
import {Addbuy} from "./components/Admin/Addbuy";
import {AdminMenu} from "./components/Admin/AdminMenu";
import {Contact} from "./components/Contact";
import {Auth} from "./components/Auth";
import {Footer} from "./components/Footer";
import {Main} from "./components/Admin/Main";
import {Tax} from "./components/Admin/Tax";
import {Blog} from "./components/Blog";

class App extends React.Component {
    constructor() {
        super();
        this.changeH1 = this.changeH1.bind(this);
        this.state = {
            h1: ""
        }
    }

    changeH1(title) {
        this.setState({
            h1: title
        })
    }

    render() {
        return (<div>
                <BrowserRouter>
                    <Menu/>
                    <PageHeader h1={this.state.h1}/>
                    <Route exact path="/" render={() => <Post changeH1={this.changeH1}/>}/>
                    <Route path="/about" render={() => <About changeH1={this.changeH1}/>}/>
                    <Route path="/contact" render={() => <Contact changeH1={this.changeH1}/>}/>
                    <Route path="/auth" render={() => <Auth changeH1={this.changeH1}/>}/>
                    <Route path="/blog" render={() => <Blog changeH1={this.changeH1}/>}/>
                    <Route path="/register" render={() => <Register changeH1={this.changeH1}/>}/>
                    <Route path="/addshell" render={() => <AddSell changeH1={this.changeH1}/>}/>
                    <Route path="/addpost" render={() => <AddPost changeH1={this.changeH1}/>}/>
                    <Route path="/addbuy" render={() => <Addbuy changeH1={this.changeH1}/>}/>
                    <Route path="/adminmenu" render={() => <AdminMenu/>}/>
                    <Route path="/main" render={() => <Main changeH1={this.changeH1}/>}/>
                    <Route path="/tax" render={() => <Tax changeH1={this.changeH1}/>}/>
                    <Route path="/service" render={() => <Service changeH1={this.changeH1}/>}/>
                    <Route path="/userpage" render={() => <UserPage changeH1={this.changeH1}/>}/>
                    <Route path="/single" render={() => <Single changeH1={this.changeH1}/>}/>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
