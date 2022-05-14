import { Button, Container, createStyles, FormControl, Grid, Input, InputLabel, Link, makeStyles, Paper, TextField, Theme, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { LoginInput } from '../data/models/user';
import * as Yup from 'yup';
import { ErrorMessages } from '../utils/regex';
import { useLazyQuery, useQuery } from '@apollo/client';
import { LOGIN_QUERY } from './api/authentication/authenticate';
import { Form, Formik } from 'formik';
import { useRouter } from "next/router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        padding: theme.spacing(2)
    },
    grid: {
        padding: theme.spacing(2)
    }
  }),
);

const initValues: LoginInput = {
    email: '',
    password: ''
}

const schema = Yup.object({
    email:
        Yup.string()
        .email(ErrorMessages.EMAIL)
        .required(ErrorMessages.REQUIRED),
    password:
        Yup.string()
        .min(6, ErrorMessages.PASSWORD_LENGTH)
        .required(ErrorMessages.REQUIRED)
})

export default function Login() {
    const classes = useStyles();
    const [doLogin, { loading, error, data }] = useLazyQuery(LOGIN_QUERY);
    const router = useRouter();

    async function handleSubmit(values, {}) {
        Login(values);
    }

    async function Login(input: LoginInput) {
        await doLogin({variables: {input: input}});
    }

    useEffect(() => {
        if(!loading && !error && data) {
            router.push('/dashboard');
        }
    }, [loading, error, data])



    return (
        <div>
            <Container maxWidth="sm">
                <Paper elevation={1} className={classes.paper}>
                    <Grid container direction="column">
                        <Grid item>
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
                                                <Grid item container>
                                                    <Button type="submit">Log in</Button>
                                                </Grid>
                                            </Grid>
                                        </Form>
                                    )
                                }
                            </Formik>
                        </Grid>
                    </Grid> 
                </Paper>
                <Grid container direction="column" className={classes.grid}>
                    <Grid item container direction="row" justify="center">
                        <Typography variant="h6">
                            <Link href="/signup" color="secondary">Sign up</Link>
                        </Typography>
                    </Grid>
                </Grid>
                
            </Container>
            
        </div>
    )
}
