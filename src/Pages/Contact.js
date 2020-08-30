import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
import ParticlesBg from 'particles-bg'
import PowerModeInput from "power-mode-input";


const useStyles = makeStyles((theme) => ({
    form: {
        width: "45%",
        [theme.breakpoints.down('md')]:{width: "100%"}
    }
}));

export default function Contact() {
    const classes = useStyles();

    return (
        <>
            <Box display={'flex'} justifyContent={'center'} m={5}><Typography variant={'h3'}>Contact
                us</Typography></Box>
            <Box display={'flex'} justifyContent={'center'} m={5}>
                <form className={classes.form} action="">
                    <Grid container spacing={5}>
                        <Grid item xs={12}><TextField fullWidth={true} required id="outlined-basic" label="Name"
                                                      variant="outlined"/></Grid>
                        <Grid item xs={12}><TextField fullWidth={true} required id="outlined-basic" label="Email"
                                                      variant="outlined"/></Grid>
                        <Grid item xs={12}><TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            fullWidth={true}
                            rows={4}
                            defaultValue="Message"
                            variant="outlined"
                        /></Grid>
                        <Grid item><Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<SendIcon/>}
                        >
                            Send
                        </Button></Grid>
                    </Grid>
                </form>
            </Box>

        </>
    );
}
