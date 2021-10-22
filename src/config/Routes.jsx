import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import Login from '../pages/Login/Login';
import SignIn from '../pages/SignIn/SignIn';

const Routes = () => {
    return (
        <Switch>
            <Route path='/login' component={Login} />

            <Route path='/sign-in' component={SignIn} />

            <Route path='/:category/search/:keyword' component={Catalog} />

            <Route path='/:category/:id' component={Detail} />

            <Route path='/:category' component={Catalog} />

            <Route path='/' component={Home} exact />
        </Switch>
    );
};

export default Routes;
