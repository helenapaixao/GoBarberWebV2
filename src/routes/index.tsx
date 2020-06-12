import React from 'react';

import {Switch, Route} from 'react-router-dom';

import SigIn from '../pages/SignIn';
import SigUp from '../pages/SignUp';



const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SigIn}/>
        <Route path="/signup" component={SigUp} />
    </Switch>
)

export default Routes;