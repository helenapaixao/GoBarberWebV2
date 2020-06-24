import React from 'react';

import {Switch} from 'react-router-dom';
import Route from './Route'

import SigIn from '../pages/SignIn';
import SigUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard'
import ForgotPassword from '../pages/ForgotPassword'



const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SigIn}/>
        <Route path="/signup" component={SigUp} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/dashboard" component={Dashboard} isPrivate/>
    </Switch>
)

export default Routes;