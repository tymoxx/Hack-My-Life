// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { Login, Register } from '../pages';

// Instruments
import { book } from './book';

export default class Public extends Component {
    render () {
        return (
            <Switch>
                <Route component = { Login } path = { book.login } />
                <Route component = { Register } path = { book.register } />
                <Redirect to = { book.login } />
            </Switch>

    );
    }
}
