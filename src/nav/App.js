import React, { Component } from 'react';
import Private from "./Private";
import Public from "./Public";
import { withRouter } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


class App extends Component {
    componentDidMount () {
    }


    render () {
        const isAuthenticated = 0;

        // const { isAuthenticated, isInitialized, listenPosts } = this.props;

        // if (!isInitialized) {
        //     return <Loading />;
        // }

        return <>
            { isAuthenticated ? <Private /> : <Public /> }
            <NotificationContainer/>
        </>
    }
}

export default withRouter(App);
