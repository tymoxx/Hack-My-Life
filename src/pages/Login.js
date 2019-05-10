import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import logo from '../img/logo.svg'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {api} from '../instruments/api';
import deepPurple from '@material-ui/core/colors/deepPurple';
import {NotificationManager} from 'react-notifications';
import {Link} from "react-router-dom";
import {book} from "../nav/book";
import history from "../init/history";


const primary = deepPurple[700];

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        textAlign: 'center',
    },
    headline: {
        marginBottom: '20px'
    },
    logo: {
        background: primary,
        width: '90px',
        marginBottom: '23px',
        padding: 16,
        borderRadius: '20%',
    },
    logoInner: {
        width: '100%',
        color: 'white'
    },
    paper: {
        marginTop: theme.spacing.unit * 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
    },
});


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'test@test.com',
            password: '123456'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };


    handleSubmit = async (e) => {
        e.preventDefault();

        const {email, password} = this.state;

        try {
            const response = await api.login(email, password);
            NotificationManager.success('Welcome to Hack My Life');
            await localStorage.setItem('authed', true)

            await history.replace(book.upload);


        } catch (err) {
            console.log(err);
            
            NotificationManager.error('Something went wrong');
        }

    };

    render() {

        const {classes} = this.props;

        return (
            <main className={classes.main}>
                <CssBaseline/>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h5" className={classes.headline}>
                        Hack My Life
                    </Typography>
                    <div className={classes.logo}>
                        <img src={logo} className={classes.logoInner} alt="logo"/>
                    </div>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form className={classes.form} onSubmit={this.handleSubmit}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus
                                   onChange={this.handleChange('email')} value={this.state.email}
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" type="password" id="password" autoComplete="current-password"
                                   onChange={this.handleChange('password')} value={this.state.password}/>
                        </FormControl>
                        <Button
                            type="submit"
                            // fullWidth
                            // variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Submit
                        </Button>
                        <Typography variant="body2" >
                            Not Registered yet? Go to <Link to={book.register}>registration</Link>
                        </Typography>
                    </form>
                </Paper>
            </main>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
