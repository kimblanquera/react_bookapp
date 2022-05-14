import { Component } from 'react'
import { Toolbar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SideMenu from '../sideMenu/sideMenu';
import Header from '../header/header';
import styles from './layout.module.scss'

export default function Layout({ children }) {
    return (
        <Grid container direction="column">
            <Header></Header>
            <Grid container direction="row" justify="center">
                { /*<Grid item sm={2}>
                    <SideMenu></SideMenu>
                </Grid> */ }
                <Grid item sm={10}>
                    <Toolbar />
                    <div className={styles.Container}>
                        { children }
                    </div>
                </Grid>
            </Grid>
            
        </Grid>
    )
}
