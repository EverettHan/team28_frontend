import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import HomeIcon from '@material-ui/icons/Home';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Grid } from '@material-ui/core';
import RunTestCard from './RunTestCard';
import UploadForm from './RunTest';
import CovidInfo from './CovidInfo';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    // title: {
    //     flexGrow: 1,
    // },

    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    media: {
        height: 140,
    },
}));

// function MenuAppBar() {
//     const classes = useStyles();
//     const [signedIn, setSignedIn] = React.useState(false);
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);

//     const handleChange = (event) => {
//         setSignedIn(event.target.checked);
//     };

//     const handleMenu = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     return (
//         <div className={classes.root}>
//             <FormGroup>
//                 <FormControlLabel
//                     control={<Switch checked={signedIn} onChange={handleChange} aria-label="login switch" />}
//                     label='Signed In'
//                 />
//             </FormGroup>
//             <AppBar position="static">
//                 <Toolbar>
//                     {signedIn && (
//                         <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//                             <MenuIcon />
//                         </IconButton>
//                     )}
//                     <Typography variant="h6" className={classes.title}>
//                         Quick Covid-19 Test
//                     </Typography>

//                     {signedIn && (
//                         <div>
//                             <IconButton
//                                 aria-label="account of current user"
//                                 aria-controls="menu-appbar"
//                                 aria-haspopup="true"
//                                 onClick={handleMenu}
//                                 color="inherit"
//                             >
//                                 <AccountCircle />
//                             </IconButton>
//                             <Menu
//                                 id="menu-appbar"
//                                 anchorEl={anchorEl}
//                                 anchorOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'right',
//                                 }}
//                                 keepMounted
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'right',
//                                 }}
//                                 open={open}
//                                 onClose={handleClose}
//                             >
//                                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                                 <MenuItem onClick={handleClose}>My account</MenuItem>
//                             </Menu>

//                         </div>
//                     )}
//                     {!signedIn && (
//                         <div>
//                             {/* <IconButton
//                                 aria-label="account of current user"
//                                 aria-controls="menu-appbar"
//                                 aria-haspopup="true"
//                                 onClick={handleMenu}
//                                 color="inherit"
//                             >
//                             <AccountCircle /> 
//                             </IconButton> */}
//                             <Button href="#sign_in" color="inherit">
//                                 <AccountCircle />
//                                 Sign In
//                             </Button>
//                             <Menu
//                                 id="menu-appbar"
//                                 anchorEl={anchorEl}
//                                 anchorOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'right',
//                                 }}
//                                 keepMounted
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'right',
//                                 }}
//                                 open={open}
//                                 onClose={handleClose}
//                             >
//                                 <MenuItem onClick={handleClose}>Login</MenuItem>
//                                 <MenuItem onClick={handleClose}>Register</MenuItem>
//                             </Menu>
//                         </div>
//                     )}
//                 </Toolbar>
//             </AppBar>
//         </div>
//     );
// }

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleRunTestClick = () => {
        //setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Persistent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <BrowserRouter>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                
                <List>
                    {["Home", "Run Test"].map((text, index) => (
                    <ListItem key={text} component={Link} to={"/" + text}>
                        <ListItemIcon>
                        {index % 2 === 0 ? <HomeIcon /> : <DirectionsRunIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
            </Drawer>
            
            <main className={clsx(classes.content, { [classes.contentShift]: open,  })} >
            <div className={classes.drawerHeader} />

            <Switch>
                <Route exact path="/" render={() => <div>Page Default bnbkl khjlhl  hlhlkj  lhl l lh lhlhl h lhlh lhllk lh </div>} />
                <Route path="/home" render={() => <div> Page Homehl l l l h liu li yuiy o7o8 ylkh oyiuyy k hg khg gkh k gkjgkkgg</div>} />
                <Route path="/Run Test" render={() => <div> Page Run Testhjjl l lk hlhl hlkhlkhkjkj hjh  jlh hlkjhljlh hl ljhlhiuiuiuui iu iu iu  uiu</div>} />
            </Switch>
            
            {/* <CovidInfo />
                <Grid container>
                    <Grid item xs={3} >
                        <RunTestCard open={open} onOpenChange={handleRunTestClick}/>
                    </Grid>
                </Grid> */}

            </main>
            </BrowserRouter>
        </div>
    );
}
