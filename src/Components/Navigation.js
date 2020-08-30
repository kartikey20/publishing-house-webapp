import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {fade, makeStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Hidden from '@material-ui/core/Hidden';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import withStyles from "@material-ui/core/styles/withStyles";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import useTheme from "@material-ui/core/styles/useTheme";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const drawerWidth = 300;
const BootstrapButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        marginLeft: '6px',
        marginRight: '6px',
        color: "white",
        fontSize: 16,
        padding: '6px 12px',
        lineHeight: 1.5,
        outline: "none",
        backgroundColor: '#3F51B5',
        fontFamily: 'Roboto',
        '&:hover': {
            backgroundColor: '#0069d9',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
})(Button);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBarIcon: {
        fontSize: "14px",
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    drawerPaper: {
        width: drawerWidth
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function NavigationBar() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Hidden smUp><IconButton
                        color="inherit"
                        aria-label="open-drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                    >
                        <MenuIcon/>
                    </IconButton></Hidden>
                    <Link  className={classes.link} to='/'><IconButton>
                        <img src="https://img.icons8.com/fluent-systems-filled/48/ffffff/library.png"/>
                    </IconButton></Link>
                    <Typography className={classes.title} variant="h6">
                        Ouroboros Publishing
                    </Typography>
                    <Hidden smDown><Link className={classes.link} to="/Home"> <BootstrapButton
                        classesName={classes.button}>Home</BootstrapButton></Link></Hidden>
                    <Hidden smDown><Link className={classes.link} to="/About"> <BootstrapButton
                        classesName={classes.button}>About Us</BootstrapButton></Link></Hidden>
                    <Hidden smDown><Link className={classes.link} to="/Author"> <BootstrapButton
                        classesName={classes.button}>Author</BootstrapButton></Link></Hidden>
                    <Hidden smDown><Link className={classes.link} to="/Contact"> <BootstrapButton
                        classesName={classes.button}>Contact Us</BootstrapButton></Link></Hidden>
                    <Hidden smDown>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{'aria-label': 'search'}}
                            />
                        </div>
                    </Hidden>
                </Toolbar>
            </AppBar>

            <Hidden smUp><Drawer
                                          anchor="left"
                                          open={open}

                                          classes={{
                                              paper: classes.drawerPaper,
                                          }}
            >
                <div role="presentation">
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                        <Link className={classes.link} to='/'><IconButton>
                            <img src="https://img.icons8.com/fluent-systems-filled/48/000000/library.png"/>
                        </IconButton></Link>
                        <Typography className={classes.appBarIcon}>
                            Ouroboros Publishing
                        </Typography>
                    </IconButton>
                </div>
                <Divider/>
                <List onClick={handleDrawerClose}>
                    <ListItem button>
                        <ListItemIcon> <HomeIcon/></ListItemIcon>
                        <Link className={classes.link} to={`/Home`}><ListItemText primary={'Home'}/></Link>
                    </ListItem><ListItem button>
                    <ListItemIcon> <InfoIcon/></ListItemIcon>
                    <Link className={classes.link} to={`/About`}><ListItemText primary={'About Us'}/></Link>
                </ListItem><ListItem button>
                    <ListItemIcon> <LocalLibraryIcon/></ListItemIcon>
                    <Link className={classes.link} to={`/Author`}><ListItemText primary={'Author'}/></Link>
                </ListItem><ListItem button>
                    <ListItemIcon> <ContactMailIcon/></ListItemIcon>
                    <Link className={classes.link} to={`/Contact`}><ListItemText primary={'Contact Us'}/></Link>
                </ListItem>

                </List>
            </Drawer></Hidden>
        </div>
    );
}
