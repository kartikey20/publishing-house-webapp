import React from 'react';
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyle = makeStyles((theme) => ({
        root: {
            margin: '3em',
            [theme.breakpoints.down('sm')]: {
                margin: '2em',
            },

        },
        title: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '3em',
            marginBottom: '3em',
        },
        text: {
            textAlign: 'justify',
        }
    })
)
const About = () => {
    const classes = useStyle();
    return (
        <> <Box className={classes.root}>
            <Box className={classes.title}><Typography variant={'h3'}>Our Mission</Typography></Box>
            <Box className={classes.text}><Typography variant={'h6'}>
                Penguin Random House is the international home to nearly 250 editorially and creatively independent
                publishing imprints. Together, our mission is to foster a universal passion for reading by
                partnering with authors to help create stories and communicate ideas that inform, entertain, and
                inspire, and to connect them with readers everywhere.
            </Typography></Box>
            <Box className={classes.title}><Typography variant={'h3'}>What We Do</Typography></Box>
            <Box className={classes.text}><Typography variant={'h6'}>
                Our dedicated team of publishing professionals is committed to helping authors realize their very best
                work and to finding innovative new ways of bringing stories and ideas to audiences worldwide. By
                leveraging our global reach, embracing new technologies, and collaborating with authors at every stage
                of the publishing process—from editorial and design, to sales and marketing, to production and
                distribution—we aim to provide them with the greatest platform possible. At the same time, we fiercely
                protect our authors’ intellectual property and champion freedom of expression, ensuring that their
                voices carry beyond the page and into the folds of communities and societies around the globe.
            </Typography></Box>
            <Box className={classes.title}><Typography variant={'h3'}>Our Heritage and Ongoing
                Commitment</Typography></Box>
            <Box className={classes.text}><Typography variant={'h6'}>
                With a rich history dating back to the 1800s, our expansive publishing portfolio contains books and
                products for readers of all ages at every stage of life. We’re also proud to count more than 70 Nobel
                Prize laureates and hundreds of the world’s most widely read authors as part of the Penguin Random House
                family.
                <br/><br/>
                Penguin Random House is committed to expanding our role as a cultural institution that serves society
                not only with the books we publish and investments we make in new ideas, creativity, and diverse voices,
                but also through our charitable donations and leadership of numerous campaigns and initiatives worldwide
                that promote literacy and reading culture, support freedom of expression, and reflect our belief in the
                power of books to connect and change lives.
            </Typography></Box>
        </Box>
        </>
    )
}
export default About;
