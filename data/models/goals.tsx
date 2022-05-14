export default interface GoalDto {
    id: string,
    type: GoalType,
    duration: GoalDuration,
    week?: number,
    month?: number,
    year?: number,
    goalAmount: number,
    currentAmount: number,
    dateCreated: Date,
}

export enum GoalType {
    BOOKS = 'Books',
    PAGES = 'Pages',
    STREAK = 'Streak'
}

export enum GoalDuration {
    WEEK = 'Week',
    MONTH = 'Month',
    YEAR = 'Year',
}