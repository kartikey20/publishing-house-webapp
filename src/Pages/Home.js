import React from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Hidden} from "@material-ui/core";


const useStyle = makeStyles((theme) => ({
        root: {
            margin:"3em",
            [theme.breakpoints.down('sm')]: {
                margin: '2em',
            },
            backgroundColor:"#3F51B5",
            color:"white",


        },

        text: {
            textAlign: 'justify',
        },

    })
)
const Home = () => {
    const classes = useStyle();
    return (
        <>
            <Box mx={20} p={5} boxShadow={3} borderRadius={16} className={classes.root}>
                <Box><Hidden smDown> <Box><Typography align={'center'} display='block' variant={'h3'}>
                    Welcome to Ouroboros Publishing
                </Typography></Box>
                </Hidden>
                    <Hidden smUp><Box>
                        <Typography variant={'h3'} display='block' align={'center'}>Welcome</Typography>
                        <Typography variant={'h3'} display='block' align={'center'}>To</Typography>
                        <Typography variant={'h3'} display='block' align={'center'}>Ouroboros Publishing</Typography>
                    </Box></Hidden>
                </Box>
            </Box>
            <Box m={3}><Typography className={classes.text} display='block' variant={'h6'}>
                Ouroboros Publishing is a small team based in Cambridge, Massachusetts. We were founded in 2019 by a
                writer, a publisher, and a software engineer with a shared desire to connect writers with readers
                and readers
                with good stories.
                <br/>
                <br/>
                We see fresh.ink as the gateway into a whole universe of great literary writing. We feature emerging
                and award-winning writers alike. Their stories have been selected from print and online magazines
                all over the world, reprinted here for your rediscovery. By giving them new life, we hope to help
                you find new authors to follow and more magazines to explore.
                <br/>
                <br/>
                A special thank you to all of our contributors, and to the readers and editors who found these
                wonderful stories first.
                <br/>
                <br/>
                If you have any questions about fresh.ink, please drop us a note at hello@Ouroboros Publishing.
            </Typography></Box>

        </>
    )
}
export default Home;







