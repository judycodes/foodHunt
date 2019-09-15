import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Landing, Home, About, Hangry, NotFound} from './components';

const Routes = () => {

        return (
            <Switch>
                <Route exact path="/foodHunt" component={Landing} />
                <Route exact path="/foodHunt/home" component={Home} />
                <Route exact path="/foodHunt/about" component={About} />
                <Route exact path="/foodHunt/hangry" component={Hangry} />


                <Route path="/foodHunt/*" component={NotFound} />
            </Switch>
        )

};

export default Routes;
