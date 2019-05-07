import React from 'react';
import { render } from 'react-dom';
import { Router } from "react-router";
import App from "./nav/App";
import history from './init/history';
import './index.css';


render(
    <Router history={history}>
        <App/>
    </Router>,
    document.querySelector('#root')
);
