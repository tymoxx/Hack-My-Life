import React from 'react';
import {render} from 'react-dom';
import {Router} from "react-router";
import App from "./nav/App";
import history from './init/history';
import './index.css';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import deepPurple from '@material-ui/core/colors/deepPurple';

const primary = deepPurple[400];

const theme = createMuiTheme({
        palette: {
            primary: {
                main: primary,
            },
        }
    },
);

render(
    <Router history={history}>
        <MuiThemeProvider theme={theme}>
            <App/>
        </MuiThemeProvider>
    </Router>,
    document.querySelector('#root')
);
