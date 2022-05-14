import { createStyles, Grid, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BookDto from '../../data/models/book';
import Book from '../../components/book/book';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(4)
    }
  }),
);


export default function SingleBook() {

    const [book, setBook] = useState<BookDto>(null);
    const router = useRouter();
    const { id } = router.query;
    const classes = useStyles();
    

    useEffect(() => {

        const fetchData = async() => {

            const results = await fetch(`/api/search/books/${id}`, {
                method: 'GET'
            });

            const jsonResults = await results.json();
            setBook(jsonResults);
        }

        fetchData();
    }, [])

    return (
        <div>
            <Grid container direction="column">
                <Grid item>
                    <Paper elevation={1} className={classes.paper}>
                        {
                            book && (
                                <Book {...book} />
                            )
                        }
                        
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={1} className={classes.paper}>
                        <Typography variant="h6">
                            Summary
                        </Typography>
                        {
                            book && (
                                <p>{ book.description }</p>
                            )
                        }
                        
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
