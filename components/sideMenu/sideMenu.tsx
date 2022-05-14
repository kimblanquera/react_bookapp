import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem, ListItemText, Toolbar } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import drawerStyles from './sideMenu.module.scss';
import UserDetails from '../userDetails/userDetails';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: 'calc(100%/6)',
      flexShrink: 0,
    },
    drawerPaper: {
      width: 'calc(100%/6)'
    }
  }),
);

export default function SideMenu()  {
    const styles = useStyles();
        return (
            <div className={drawerStyles.Drawer}>
                <Drawer
                    variant="permanent"
                    anchor="left"
                    className={styles.drawer}
                    classes={{
                        paper: styles.drawerPaper
                    }}
                    open={true}
                >
                  <Toolbar />
                  <UserDetails></UserDetails>
                    <List>
                      <ListItem button>
                          <ListItemText primary="My Books" />
                      </ListItem>
                      <ListItem button>
                          <ListItemText primary="Lists" />
                      </ListItem>
                      <ListItem button>
                          <ListItemText primary="Goals" />
                      </ListItem>
                      <ListItem button>
                          <ListItemText primary="Reminders" />
                      </ListItem>
                      <ListItem button>
                          <ListItemText primary="Statistics" />
                      </ListItem>
                    </List>
                </Drawer>
            </div>
        )

}
