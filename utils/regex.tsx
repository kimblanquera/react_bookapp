enum Validators {
    NAME='^[a-zA-Z-. ]*$'
}

export enum ErrorMessages {
    NAME_REGEX='Please enter a valid value. Only letters, dash and period are accepted',
    EMAIL='Please enter a valid email. ex. name@email.com',
    REQUIRED='Required',
    PASSWORD_LENGTH='Please enter a password that is 6 characters in length or more'
}
export default Validators;