import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import RestaurantesMap from './pages/RestaurantMap';
import Restaurante from './pages/Restaurante';
import CreateRestaurante from './pages/CreateRestaurante';

function Routes (){
    return(
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/app" component={RestaurantesMap} />
            <Route path="/restaurante/create" component={CreateRestaurante} />
            <Route path="/restaurante/:id" component={Restaurante} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;