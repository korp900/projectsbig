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
//проверка комита
    render() {
        return (<div>
                <BrowserRouter>
                    <Menu/>
                    <PageHeader h1={this.state.h1}/>
                    <Route exact path="/" render={() => <Post/>}/>
                    <Route path="/about" render={() => <About/>}/>
                    <Route path="/contact" render={()=><Contact changeH1={this.changeH1}/>}/>
                    <Route path="/auth" render={() => <Auth/>}/>
                    <Route path="/blog" render={() => <Blog changeH1={this.changeH1}/>}/>
                    <Route path="/register" render={() => <Register/>}/>
                    <Route path="/addshell" render={() => <AddSell/>}/>
                    <Route path="/addpost" render={() => <AddPost/>}/>
                    <Route path="/addbuy" render={() => <Addbuy/>}/>
                    <Route path="/adminmenu" render={() => <AdminMenu/>}/>
                    <Route path="/main" render={() => <Main/>}/>
                    <Route path="/tax" render={() => <Tax/>}/>
                    <Route path="/service" render={() => <Service/>}/>
                    <Route path="/userpage" render={() => <UserPage/>}/>
                    <Route path="/single" render={() => <Single/>}/>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
