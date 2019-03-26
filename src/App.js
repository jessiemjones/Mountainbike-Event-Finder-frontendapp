import React from 'react';
import Navbar from './nav-foot/Navbar';
import Footer from './nav-foot/Footer';

import Listpage from './pages/Listpage';
import SavedPage from './pages/Savedpage'
import Submitpage from './pages/Submitpage';
import './App.css'

import {Switch, Route} from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/listpage" component={Listpage} />
                <Route exact path="/savedpage" component={SavedPage} />
                <Route exact path="/contact" component={Submitpage} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;
    