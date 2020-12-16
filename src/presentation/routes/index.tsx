import React from 'react';
import { Route } from 'react-router-dom';
import { routers as routes, IRouter } from './routers';

const Routes = () => {
    return (
        <>
            {
                routes.map((route: IRouter) => {
                    return <Route path={route.path} exact={route.exact} component={route.component} />
                })
            }
        </>
    );
}

export default Routes;