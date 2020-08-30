import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));


export default function Report() {
    const classes = useStyles();

    return (
        <> <Box my={3}><Typography align='center' variant={'h3'}>Report</Typography></Box>
            <List>
                <ListItem>
                    <ListItemText primary="Navigation has clear task flows with minimal steps with easy to locate controls and clear labeling. Focus control, or the ability to control keyboard and reading focus, can be implemented for frequently used tasks.

"/>
                </ListItem>
                <Divider/><ListItem>
                <ListItemText
                    primary="Clearly visible elements, Sufficient contrast and size, A clear hierarchy of importance, Key information that is discernible at a glance"/>
            </ListItem><Divider/><ListItem>
                <ListItemText
                    primary="By placing important actions at the top of the screen they’re given more importance in the hierarchy."/>
            </ListItem><Divider/><ListItem>
                <ListItemText
                    primary="The lines of text follow the color contrast ratio recommendations and are legible against their background colors."/>
            </ListItem>
            </List>

        </>
    );
}
