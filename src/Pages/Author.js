import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import data from "../Assests/data";
import {Box} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
    },
    root: {
        maxWidth: 345,
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        margin: '3em'
    },
    gridLayout: {
        [theme.breakpoints.down('sm')]: {direction: "column"},
    },
}));

export default function Author() {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.title}><Typography variant={'h3'}>
                Our Authors
            </Typography>
            </Box>
            <Grid container direction='column'
                  justify="center"
                  alignItems="center">
                {data.map(props => {
                    let hyphen = props.title.replace(/\\s+/g, '-');
                    return (
                        <Grid className={classes.gridLayout} item>
                            <Box my={3}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Author-Image"
                                            height="300"
                                            image={`${props.image}`}
                                            title={`${props.title}`}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {props.title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {props.description.substring(0, 250)}...
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Link to={`/Authors/${hyphen}`}><Button size="small" color="primary">
                                            Learn More
                                        </Button></Link>
                                    </CardActions>
                                </Card>
                            </Box>
                        </Grid>
                    )
                })}
            </Grid></>
    );
}
