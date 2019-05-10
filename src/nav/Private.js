import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Upload } from '../pages';
import { book } from './book';


export default class Private extends Component {

    render () {
        return (
            <Switch>
                <Route component = { Upload } path = { book.upload
                } />
                <Redirect to = { book.upload } />
            </Switch>
        );
    }
}
