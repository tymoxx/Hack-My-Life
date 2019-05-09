import React, { Component } from 'react';
import Private from "./Private";
import Public from "./Public";
import { withRouter } from 'react-router-dom';

class App extends Component {
    componentDidMount () {
    }


    render () {
        const isAuthenticated = 1;

        // const { isAuthenticated, isInitialized, listenPosts } = this.props;

        // if (!isInitialized) {
        //     return <Loading />;
        // }

        return isAuthenticated ? <Private /> : <Public />;
    }
}

export default withRouter(App);
