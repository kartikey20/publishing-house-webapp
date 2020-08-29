import React from 'react';
import data from "../Assests/data";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
    box: {
        display: "flex",
        justifyContent: "center"
    },
    image: {
        width: "100%",
        height: "auto",

    },
    text: {
        textAlign: 'justify',
    },
    large: {
        width: theme.spacing(50),
        height: theme.spacing(50),
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(40),
            height: theme.spacing(40),
        }
    },
}));
const AuthorPage = ({match}) => {
    const classes = useStyles();
    const name = match.params.name;

    const Component = data.find(props => {
        let hyphen = props.title.replace(/\\s+/g, '-');
        return hyphen === name;
    });
    return (
        <> <Box><Grid container>
            <Grid item xs={12}><Box display={'flex'} justifyContent={'center'} m={3}><Typography
                variant={'h4'}>{Component.title}</Typography></Box></Grid>
            <Grid item xs={12}><Box display={'flex'} justifyContent={'center'} m={3}><Avatar variant="square"
                                                                                             alt={`${Component.title}`}
                                                                                             src={`${Component.image}`}
                                                                                             className={classes.large}/></Box></Grid>
            <Grid item xs={12}><Box m={3}><Typography
                className={classes.text}>{Component.description}</Typography></Box></Grid>
        </Grid>
        <Grid item xs={12}><Box display={'flex'} justifyContent={'center'} m={3}><Typography variant={'h3'}>Works
        </Typography></Box></Grid>
        <Grid item xs={12}>
            <Grid container>{Component.works.map(props=> {
                return (
                    <Grid item xs={12} sm={4}>
                        <Box display={'flex'} justifyContent={'center'} m={3}><Typography
                            variant={'h4'}>{props.title}</Typography></Box>
                        <Box display={'flex'} justifyContent={'center'} m={3}><Avatar variant="square"
                                                                                      alt={`${props.title}`}
                                                                                      src={`${props.image}`}
                                                                                      className={classes.large}/></Box>
                        <Box m={3}><Typography
                            className={classes.text}>{Component.description}</Typography></Box>
                    </Grid>
                )
            })}</Grid>
        </Grid></Box>

        </>
    )
}
export default AuthorPage;
