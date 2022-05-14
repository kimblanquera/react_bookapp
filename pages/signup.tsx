import { createStyles, Grid, makeStyles, Paper, TextField, Theme, Typography, Container, Button } from '@material-ui/core'
import { ClassNameMap } from '@material-ui/styles';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { CreateUserInput } from '../data/models/user';
import { useQuery, gql, DocumentNode, useMutation } from '@apollo/client';
import { PasswordUtil } from '../utils/bcrypt/PasswordUtil';
import { createUserQuery } from './api/users/user.handler';
import * as Yup from 'yup';
import Validators, { ErrorMessages } from '../utils/regex';
import { Form, Formik } from 'formik';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2)
    },
    typography: {
      margin: '0 0 1rem 0'
    }
  }),
);

const initValues: CreateUserInput = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

const schema = Yup.object({
    firstName: 
        Yup.string()
        .matches(new RegExp(Validators.NAME), ErrorMessages.NAME_REGEX)
        .required(ErrorMessages.REQUIRED),
    lastName:
        Yup.string()
        .matches(new RegExp(Validators.NAME), ErrorMessages.NAME_REGEX)
        .required(ErrorMessages.REQUIRED),
    email:
        Yup.string()
        .email(ErrorMessages.EMAIL)
        .required(ErrorMessages.REQUIRED),
    password:
        Yup.string()
        .min(6, ErrorMessages.PASSWORD_LENGTH)
        .required(ErrorMessages.REQUIRED)
})

export default function Signup() {

    const classes: ClassNameMap = useStyles();
    const createQuery: DocumentNode = gql `${ createUserQuery() }`;
    const [createUser, { data }] = useMutation(createQuery)

    async function handleSubmit(values, {}) {

        CreateUser(values);
    }

    async function CreateUser(input: CreateUserInput) {
        const result = await createUser({ variables: { input: input }});
        if(result?.errors) {
            throw new Error(result.errors.map(err => err.message).toString());
        }
        else {
            console.log(result.data);
        }
    }

    return (
        <div>
            <Container maxWidth="sm">
                <Paper elevation={1} className={classes.paper}>
                    <Typography variant="h3" className={classes.typography}>Sign up</Typography>
                    <Formik initialValues={initValues} validationSchema={schema} onSubmit={handleSubmit}>
                        
                        {
                            ({submitForm, isSubmitting, touched, errors, values, handleBlur, handleChange}) => (
                            <Form>  
                                <Grid container direction="column" spacing={1}>
                                    <Grid item>
                                        <TextField 
                                            fullWidth
                                            label="Email address"
                                            type="email"
                                            variant="outlined"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.email && Boolean(errors.email)}
                                            helperText={touched.email && errors.email}
                                            required>
                                        </TextField>
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            fullWidth
                                            label="Password"
                                            type="password"
                                            variant="outlined"
                                            name="password"
                                            value={values.password}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.password && Boolean(errors.password)}
                                            helperText={touched.password && errors.password}
                                            required>
                                        </TextField>
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            fullWidth
                                            label="First name"
                                            type="text"
                                            variant="outlined"
                                            name="firstName"
                                            value={values.firstName}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.firstName && Boolean(errors.firstName)}
                                            helperText={touched.firstName && errors.firstName}
                                            required>
                                        </TextField>
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            fullWidth
                                            label="Last name"
                                            type="text"
                                            variant="outlined"
                                            name="lastName"
                                            value={values.lastName}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.lastName && Boolean(errors.lastName)}
                                            helperText={touched.lastName && errors.lastName}
                                            required>
                                        </TextField>
                                    </Grid>
                                    <Grid item>
                                        <Button fullWidth type="submit">Continue</Button>
                                    </Grid>
                                </Grid>
                            </Form>
                            )
                        }
                        
                    </Formik>
                    
                </Paper>
            </Container>
            
            
        </div>
    )
}
