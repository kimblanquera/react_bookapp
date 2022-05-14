import { Grid, Link, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'

export default function settings() {
    return (
        <div>
            <Paper elevation={1}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h4">Account</Typography>
                        <TextField label="Email address"></TextField>

                        <Link href={`./change_password`}><a>Change Password</a></Link>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">Personal</Typography>
                    </Grid>
                </Grid>
            </Paper>
            
        </div>
    )
}
