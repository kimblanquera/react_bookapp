import { useQuery, useMutation, gql } from '@apollo/client';
import { DocumentNode } from 'graphql';
import { LoginInput } from '../../../data/models/user';
import { PasswordUtil } from '../../../utils/bcrypt/PasswordUtil';

export const LOGIN_QUERY = gql `
    query Login($input: LoginInput!){
        login(input: $input) {
            _id,
            firstName,
            lastName,
            email
        }
    }
`

export function Login(input: LoginInput) {

}