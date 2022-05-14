import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { AppBar, createStyles, makeStyles, Paper, Theme, Toolbar, Typography } from '@material-ui/core';
import SearchBar from '../search/search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    paper: {
      padding: '4px 8px'
    }
  }),
);

export default function Header() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar} color="default">
                <Toolbar>
                <Grid container direction="row" alignItems="center" justify="space-between">
                    <Grid item sm={9}>
                        <Typography variant="h6" noWrap>
                            Book App
                        </Typography>
                    </Grid>
                    <Grid item sm={3}>
                      <Paper elevation={1} className={classes.paper}> 
                        <SearchBar></SearchBar>
                      </Paper>
                        
                    </Grid>
                </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}