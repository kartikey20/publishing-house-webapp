import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import NavigationBar from "./Components/Navigation";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Author from "./Pages/Author";
import AuthorPage from "./Pages/AuthorPage";
import Contact from "./Pages/Contact";
import ParticlesBg from "particles-bg";

function App() {
    return (
        <>
            <Router>

                <NavigationBar/>

                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path={'/About'} component={About}/>
                    <Route path={'/Author'} component={Author}/>
                    <Route path={'/Authors/:name'} component={AuthorPage}/>
                    <Route path={'/Contact'} component={Contact}/>
                </Switch>
            </Router>
            <ParticlesBg type="cobweb" color="#a6a4ad" num={70} bg={true} />
        </>
    );
}

export default App;
