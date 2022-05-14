import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import ReminderList from '../reminders/reminderList'
import StatsCircle from '../statsCircle/statsCircle'

export default function GoalsProgress() {
    return (
        <Grid container direction="column" spacing={2}>
            <Grid item container direction="row">
                <Grid item sm={4}>
                    <Typography variant="h5">Today</Typography>
                    <StatsCircle unit="pages" currentValue={10}></StatsCircle>
                </Grid>
                <Grid item sm={8}>
                    <Typography variant="h5">Reminders</Typography>
                    <ReminderList startDate={new Date()}></ReminderList>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="h5">Goals</Typography>
                <Grid container direction="row">
                    <Grid item sm={4}>
                        <StatsCircle unit="books" currentValue={10}></StatsCircle>
                    </Grid>
                    <Grid item sm={4}>
                        <StatsCircle unit="day streak" currentValue={8}></StatsCircle>
                    </Grid>
                    <Grid item sm={4}>
                        <StatsCircle unit="hrs this week" currentValue={24}></StatsCircle>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}
