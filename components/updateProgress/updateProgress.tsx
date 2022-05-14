import { FormControlLabel, Grid, Switch, TextField } from '@material-ui/core'
import React from 'react'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'

export default function UpdateProgress() {
    const [state, setState] = React.useState({
        done: false,
        selectedDate: new Date()
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleDateChange = (date: Date | null) => {
        setState({
            ...state,
            selectedDate: date
        });
    }
    return (
        <div>
            <Grid container direction="column" spacing={2}>
                <Grid item container justify="space-between" alignItems="center" direction="row" spacing={2}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Page(s) read"
                        type="number"
                    />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date"
                            value={state.selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item>
                        <FormControlLabel
                            control={
                            <Switch
                                checked={state.done}
                                onChange={handleChange}
                                color="primary"
                                name="done"
                            />
                            }
                            label="I've finished this book!"
                        />
                    </Grid>
            </Grid>
        </div>
    )
}
