import { FormControlLabel, Checkbox } from '@material-ui/core';
import moment from 'moment';
import React, { useEffect } from 'react'
import ReminderDto from '../../data/models/reminder';
import { RemindersData } from '../../data/remindersData';

interface ReminderProps {
    startDate: Date,
    endDate?: Date
}



export default function ReminderList(props: ReminderProps) {
    const [state, setState] = React.useState({
        reminders: []
    })

    useEffect(() => {
        setState({...state, reminders: getReminders()})
    }, [])

    function getReminders() {
      const start: moment.Moment = moment(props.startDate).startOf('day');
      const end: moment.Moment = props.endDate ? moment(props.endDate).endOf('day') : moment(start).endOf('day');
      return RemindersData.filter((reminder: ReminderDto) => {
          if(moment(reminder.date).isBetween(start, end)) {
            return true;
          }
          else {
              return false;
          }
      })
    }

    return (
        <div>
            {
                    state.reminders.map((reminder: ReminderDto) => (
                        <FormControlLabel
                            key={reminder.reminderId}
                            control={
                            <Checkbox
                                checked={reminder.completed}
                                color="primary"
                            />
                            }
                            label={reminder.task}
                        />
                    ))
            }
        </div>
    )
}
