import React, {Component} from 'react';
import axios from 'axios';
import {withStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

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
    },
    fab: {
        margin: theme.spacing.unit * 2,
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
    },
    input: {
        display: 'none',
    },
    paper: {
        marginTop: theme.spacing.unit * 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
});

class Dashboard extends Component {

    state = {
        title: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSelectFile = e => {
        console.log(e.target.files[0]);

        const selectedFile = e.target.files[0];

        const fd = new FormData();
        fd.append('image', selectedFile, selectedFile.name, fd, {
            onUploadProgress: progressEvent => {
                console.log('progress...:' + progressEvent.loaded);

            }
        });

        axios.post('https://api.imgur.com/3/image').then(res => {
            console.log('res:', res);
        });
    };

    render() {
        const {classes} = this.props;
        return (
            <main className={classes.main}>

                <Paper className={classes.paper}>
                    <CardContent>

                        <form className={classes.container} noValidate autoComplete="off">
                            {/* TITLE */}
                            <TextField
                                id="outlined-name"
                                label="Title"
                                className={classes.textField}
                                value={this.state.name}
                                onChange={this.handleChange('title')}
                                margin="normal"
                                variant="outlined"
                            />

                            <br />

                            {/* IMAGE UPLOAD*/}
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                type="file"
                                onChange={this.handleSelectFile}
                            />
                            <label htmlFor="contained-button-file">
                                <Tooltip title="Upload image" aria-label="Add">
                                    <Fab component="span" color="primary" className={classes.fab}
                                    >
                                        <AddIcon/>
                                    </Fab>
                                </Tooltip>
                            </label>
                        </form>
                    </CardContent>
                </Paper>
            </main>
        );
    }
}

export default withStyles(styles)(Dashboard);
