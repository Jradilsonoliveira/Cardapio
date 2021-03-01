import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import RestaurantesMap from './pages/RestaurantMap';
import Restaurante from './pages/Restaurante';
//import CreateRestaurante from './pages/CreateRestaurante';
//import Orphanage from './pages/Orphanage';
import CreateRestaurante from './pages/CreateRestaurante';

function Routes (){
    return(
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/app" component={RestaurantesMap} />
            <Route path="/restaurante/:id" component={Restaurante} />
            <Route path="/restaurantes/create" component={CreateRestaurante} />
            
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;