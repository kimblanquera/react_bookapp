export default interface UserDto {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    image: string,
    password: string
}

export interface CreateUserInput {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

export interface LoginInput {
    email: string,
    password: string
}