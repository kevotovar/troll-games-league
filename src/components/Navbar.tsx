import React from 'react'
import { connect } from 'react-redux'
import { isLoaded, isEmpty, withFirebase } from 'react-redux-firebase'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { Link } from '@reach/router'

import HomeIcon from '@material-ui/icons/Home'
import AccountIcon from '@material-ui/icons/AccountCircle'

import { toggleDrawer } from 'store/reducers/ui/actions'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
)

const iOS =
  (process as any).browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

interface NavbarProps {
  drawer: boolean
  toggleDrawer: (event: any) => void
  auth: any
  firebase: any
}

function Navbar({ drawer, toggleDrawer, auth, firebase }: NavbarProps) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Troll League
          </Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        open={drawer}
        onOpen={toggleDrawer}
        onClose={toggleDrawer}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <List onClick={toggleDrawer}>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItem>
        </List>
        {isLoaded(auth) && isEmpty(auth) ? (
          <>
            <Divider />
            <List onClick={toggleDrawer}>
              <ListItem button component={Link} to="/iniciar-sesion">
                <ListItemIcon>
                  <AccountIcon />
                </ListItemIcon>
                <ListItemText primary="Iniciar sesion" />
              </ListItem>
            </List>
          </>
        ) : (
          <>
            <Divider />
            <List onClick={toggleDrawer}>
              <ListItem button onClick={() => firebase.auth().signOut()}>
                <ListItemIcon>
                  <AccountIcon />
                </ListItemIcon>
                <ListItemText primary="Iniciar sesion" />
              </ListItem>
            </List>
          </>
        )}
      </SwipeableDrawer>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  drawer: state.ui.get('drawer', false),
  auth: state.firebase.auth,
})

const mapDispatchToProps = (dispatch: Function) => ({
  toggleDrawer: () => dispatch(toggleDrawer()),
})

export default withFirebase(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(React.memo(Navbar))
)
