import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import CovidInfo from './CovidInfo';
import CovidSymptoms from './CovidSymptoms';
import EmergencySigns from './EmergencySigns';
import CovidMap from './CovidMap';
import VaccineInformation from './VaccineInformation';
import VaccineAppointment from './VaccineAppointment';
import UploadForm from './RunTest';

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function AppSwitch(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem key="Home" component={Link} to={"/" }>
          <ListItemIcon>
              { <HomeIcon /> }
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem key="Covid Symptoms" component={Link} to={"/Covid Symptoms" }>
          <ListItemIcon>
              { <HomeIcon /> }
          </ListItemIcon>
          <ListItemText primary="Covid-19 Symptoms" />
        </ListItem>
        <ListItem key="Emergency Signs" component={Link} to={"/Emergency Signs" }>
          <ListItemIcon>
              { <HomeIcon /> }
          </ListItemIcon>
          <ListItemText primary="Emergency Signs" />
        </ListItem>
        <ListItem key="Covid Map" component={Link} to={"/Covid Map" }>
          <ListItemIcon>
              { <HomeIcon /> }
          </ListItemIcon>
          <ListItemText primary="Covid-19 Map" />
        </ListItem>
        <ListItem key="Vaccine Information" component={Link} to={"/Vaccine Information" }>
          <ListItemIcon>
              { <HomeIcon /> }
          </ListItemIcon>
          <ListItemText primary="Vaccine Information" />
        </ListItem>
        <ListItem key="Vaccine Appointment" component={Link} to={"/Vaccine Appointment" }>
          <ListItemIcon>
              { <HomeIcon /> }
          </ListItemIcon>
          <ListItemText primary="Vaccine Appointment" />
        </ListItem>
        
        <ListItem key="Run Test" component={Link} to={"/Run Test"  }>
          <ListItemIcon>
            { <DirectionsRunIcon />}
          </ListItemIcon>
          <ListItemText primary="Run Test" />
        </ListItem>
        
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Team 28 Covid-19 Information Portal
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <nav className={classes.drawer} aria-label="folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Switch>
            <Route exact path="/" render={() => <div><CovidInfo /> </div>} />
            <Route path="/Covid Symptoms" render = {()=> <div style={{ flexgrow: 1 }}> <CovidSymptoms /></div>} />
            <Route path="/Emergency Signs" render = {()=> <div style={{ flexgrow: 1 }}> <EmergencySigns/></div>} />
            <Route path="/Covid Map" render = {()=> <div style={{ flexgrow: 1 }}> <CovidMap/></div>} />
            <Route path="/Vaccine Information" render = {()=> <div style={{ flexgrow: 1 }}> <VaccineInformation/></div>} />
            <Route path="/Vaccine Appointment" render = {()=> <div style={{ flexgrow: 1 }}> <VaccineAppointment/></div>} />
            <Route path="/Run Test" render={() => <div style={{ flexgrow: 1 }}> <UploadForm/></div>} />
            
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

AppSwitch.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  )
};

export default AppSwitch;
