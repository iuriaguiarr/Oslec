import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login'
import Suporte from './pages/Suporte'
import Cliente from './pages/Cliente'
import Detalhes from './pages/Detalhes'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>

                <Route path="/" exact component={Login} />
                <Route path="/suporte" component={Suporte} />
                <Route path="/cliente" component={Cliente} />
                <Route path="/detalhes" component={Detalhes} />
 
            </Switch>
        </BrowserRouter>
    );
}