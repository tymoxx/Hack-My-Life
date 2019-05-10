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

        //TODO: move from here

        let authed = localStorage.getItem('authed');

        console.log('----', this.state.isAuthenticated);
        console.log('----', authed);

        this.setState({isAuthenticated: authed});

    }


    render() {

        // const { isAuthenticated, isInitialized, listenPosts } = this.props;

        // if (!isInitialized) {
        //     return <Loading />;
        // }


        return <>
            {this.state.isAuthenticated ? <Private/> : <Public/>}
            <NotificationContainer/>
        </>
    }
}

export default withRouter(App);
