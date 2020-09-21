import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import SigIn from '../pages/SignIn';
import SigUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SigIn} />
        <Route path="/signup" component={SigUp} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/profile" component={Profile} isPrivate />
        <Route path="/reset-password" component={ResetPassword} />
    </Switch>
);

export default Routes;
