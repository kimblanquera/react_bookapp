import ReminderDto from "./models/reminder";

export const RemindersData: ReminderDto[] = [
    {
        reminderId: '1',
        date: new Date(),
        completed: false,
        task: 'Buy new book on Kobo'
    },
    {
        reminderId: '2',
        date: new Date(),
        completed: false,
        task: 'Make notes on currently reading'
    },
    {
        reminderId: '3',
        date: new Date(),
        completed: false,
        task: 'Check out new releases'
    }
]