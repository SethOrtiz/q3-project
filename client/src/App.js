import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Main from "./components/Main";
import PrivateRoute from "./components/PrivateRoute";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './components/About'
import Footer from './components/Footer'

class App extends React.Component {


    render() {
    return(

<div className="App">
<BrowserRouter>
<header>
<Navbar />
</header>
<Switch>
<Route path="/" component={Main} exact />
<Route path="/about" component={About} exact/>
<PrivateRoute path="/profile" component={Profile} />
</Switch>
    <Footer />
</BrowserRouter>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
    />
</div>
)
    ;
}
}

export default App;