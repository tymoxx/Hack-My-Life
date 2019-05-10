import React, {Component} from 'react';
import Private from "./Private";
import Public from "./Public";
import {withRouter} from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: 'false',
        };
    }


    componentDidMount() {
    }


    render() {

        let authed = localStorage.getItem('authed');

        return <>
            {authed ? <Private/> : <Public/>}
            <NotificationContainer/>
        </>
    }
}

export default withRouter(App);
