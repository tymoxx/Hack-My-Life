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
import Input from '@material-ui/core/Input';
import Grid from "@material-ui/core/Grid";


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

            <Grid
                align-items-xs-center
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{minHeight: '100vh'}}
            >
                <Grid item xs={12} sm={8} md={4} align-items-xs-center>
                    <Paper className={classes.paper}>
                        <CardContent>
                            <form className={classes.container} noValidate autoComplete="off">

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
                                        <Fab centered component="span"
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
                                        />
                                    </FormControl>
                                    <FormControl margin="normal" className={classes.FormControlTag} required>
                                        <InputLabel htmlFor="tag1">Tag 2</InputLabel>
                                        <Input
                                            id='tag1'
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </FormControl>
                                    <FormControl margin="normal" className={classes.FormControlTag} required>
                                        <InputLabel htmlFor="tag1">Tag 3</InputLabel>
                                        <Input
                                            id='tag1'
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </FormControl>
                                    <FormControl margin="normal" className={classes.FormControlTag} required>
                                        <InputLabel htmlFor="tag1">Tag 4</InputLabel>
                                        <Input
                                            id='tag1'
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </FormControl>
                                    <FormControl margin="normal" className={classes.FormControlTag} required>
                                        <InputLabel htmlFor="tag1">Tag 5</InputLabel>
                                        <Input
                                            id='tag1'
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
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
