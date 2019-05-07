import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Dashboard } from '../pages';
import { book } from './book';


export default class Private extends Component {

    render () {
        return (
            <Switch>
                <Route component = { Dashboard } path = { book.dashboard } />
                {/*<Route component = { Profile } path = { book.profile } />*/}
                <Redirect to = { book.dashboard } />
            </Switch>
        );
    }
}
