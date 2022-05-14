import { Paper, Grid, TextField, Button } from '@material-ui/core'
import React from 'react'

export default function ChangePassword() {
    return (
        <div>
            <Paper elevation={1}>
                <form>
                    <Grid container direction="column">
                        <Grid item>
                            <TextField label="Current password" type="password"></TextField>
                        </Grid>
                        <Grid item>
                            <TextField label="New password" type="password"></TextField>
                        </Grid>
                        <Grid item>
                            <TextField label="Confirm new password" type="password"></TextField>
                        </Grid>
                        <Grid item container direction="row">
                            <Button type="submit">Save</Button>
                            <Button href={`./settings`}>
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                
            </Paper>
            
        </div>
    )
}
