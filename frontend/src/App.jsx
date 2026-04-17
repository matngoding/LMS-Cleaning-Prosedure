import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SOPList from './pages/SOPList';
import SOPDetail from './pages/SOPDetail';
import Profile from './pages/Profile';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/sop-list' component={SOPList} />
                <Route path='/sop-detail/:id' component={SOPDetail} />
                <Route path='/profile' component={Profile} />
            </Switch>
        </Router>
    );
};

export default App;