import React, {Component} from 'react';
import axios from 'axios';
import {withStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from '@material-ui/core/Input';
import Grid from "@material-ui/core/Grid";
import {api} from "../instruments/api";
import {NotificationManager} from "react-notifications";
import history from "../init/history";
import {book} from "../nav/book";


const styles = theme => ({
    paper: {
        // marginTop: theme.spacing.unit * 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        textAlign: 'center'
    },
    container: {},
    fab: {
        margin: theme.spacing.unit * 2,
    },
    inputFile: {
        display: 'none',
    },
    tagsGroup: {
        display: 'flex',
        // flexWrap: 'wrap',
    },
    FormControlTag: {
        maxWidth: '70px',
        // marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit / 2,
    },
    submit: {
        marginTop: '30px'
    }

});

class Upload extends Component {

    state = {
        title: '',
        file: '',
        tag1: '',
        tag2: '',
        tag3: '',
        tag4: '',
        tag5: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSelectFile = e => {
        this.setState({selectedFile: e.target.files[0]})

        const fd = new FormData();
        fd.append('image', this.state.file, this.state.file.name, fd, {
            onUploadProgress: progressEvent => {
                // console.log('progress...:' + progressEvent.loaded);
            }
        });

        axios.post('https://api.imgur.com/3/image').then(res => {
            // console.log('res:', res);
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        const {title, tag1, tag2, tag3, tag4, tag5} = this.state;

        try {
            const response = await api.submit(title, tag1, tag2, tag3, tag4, tag5);
            NotificationManager.success('Succesfully submitted');
            await history.replace(book.login);

        } catch (err) {
            NotificationManager.error('Something went wrong');
        }

    };

    render() {
        const {classes} = this.props;

        return (

            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{minHeight: '100vh'}}
            >
                <Grid item xs={12} sm={8} md={4}>
                    <Paper className={classes.paper}>
                        <CardContent>
                            <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>

                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    align='center'
                                >
                                    Share your lifehack with the world
                                </Typography>

                                {/* Title Input*/}
                                <TextField
                                    id="outlined-name"
                                    label="Title"
                                    className={classes.textField}
                                    value={this.state.name}
                                    onChange={this.handleChange('title')}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                />

                                <br/>
                                <br/>

                                {/* IMAGE UPLOAD*/}
                                <input
                                    accept="image/*"
                                    className={classes.inputFile}
                                    id="contained-button-file"
                                    type="file"
                                    onChange={this.handleSelectFile}
                                />
                                <label htmlFor="contained-button-file">
                                    <Tooltip title="Upload image" aria-label="Add">
                                        <Fab component="span"
                                             color="primary"
                                             className={classes.fab}
                                             size='large'
                                        >
                                            <AddIcon/>
                                        </Fab>
                                    </Tooltip>
                                </label>

                                <br/>

                                <div className={classes.tagsGroup}>
                                    <FormControl margin="normal" className={classes.FormControlTag} required>
                                        <InputLabel htmlFor="tag1">Tag 1</InputLabel>
                                        <Input
                                            id='tag1'
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                            onChange={this.handleChange('tag1')}
                                        />
                                    </FormControl>
                                    <FormControl margin="normal" className={classes.FormControlTag} required>
                                        <InputLabel htmlFor="tag1">Tag 2</InputLabel>
                                        <Input
                                            id='tag2'
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                            onChange={this.handleChange('tag2')}
                                        />
                                    </FormControl>
                                    <FormControl margin="normal" className={classes.FormControlTag} required>
                                        <InputLabel htmlFor="tag3">Tag 3</InputLabel>
                                        <Input
                                            id='tag3'
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </FormControl>
                                    <FormControl margin="normal" className={classes.FormControlTag} required>
                                        <InputLabel htmlFor="tag1">Tag 4</InputLabel>
                                        <Input
                                            id='tag4'
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                            onChange={this.handleChange('tag4')}
                                        />
                                    </FormControl>
                                    <FormControl margin="normal" className={classes.FormControlTag} required>
                                        <InputLabel htmlFor="tag1">Tag 5</InputLabel>
                                        <Input
                                            id='tag5'
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                            onChange={this.handleChange('tag5')}
                                        />
                                    </FormControl>
                                </div>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Upload
                                </Button>
                            </form>
                        </CardContent>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Upload);
