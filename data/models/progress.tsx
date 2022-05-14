export default interface ProgressDto {
    id: string,
    date: Date,
    pagesRead?: number,
    type: ProgressType,
}

export enum ProgressType {
    STARTED = 'Started',
    FINISHED = 'Finished',
    ADDED_TO_LIST = 'Added to list',
    MAKRED_WITH_LABEL = 'Marked with label',
    SHELVED = 'Shelved',
    RATED = 'Rated'
}