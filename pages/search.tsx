import React, { useEffect, useState } from 'react'
import { NextRouter, useRouter } from 'next/router'
import Head from 'next/head';
import { createStyles, Grid, Paper, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import BookDto from '../data/models/book';
import Book from '../components/book/book';
import SearchBar from '../components/search/search';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2)
    },
    pagination: {
      padding: theme.spacing(4)
    },
    formControl: {
        width: '100%'
    }
  }),
);

export default function Search() {

    const router: NextRouter = useRouter();
    const query = router.query.q as string;
    const [results, setResults] = useState({
        totalItems: 0,
        items: []
    });
    const [pageIndex, setPageIndex] = useState(0);
    const styles = useStyles();

    useEffect(() => {

        const fetchData = async() => {

            const results = await fetch('/api/search/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: query,
                    pageIndex: pageIndex
                })
            });

            const jsonResults = await results.json();
            setResults(jsonResults);
        }

        fetchData();
        
    }, [pageIndex])

    function handlePageChange(event: React.ChangeEvent<unknown>, value: number) {
        setPageIndex(value);
    }

    return (
        <div>
            <Head>
                <title>Search</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Paper elevation={1} className={ styles.root }>
                <Grid container direction="row">
                    <Grid item sm={6}>
                        <SearchBar></SearchBar>
                    </Grid>
                </Grid>
                <br/>
                <Typography variant="h5">Searching for... '{ query }'</Typography>
                <br/>
                <Grid container direction="column" spacing={2}>
                    {
                        results.items.map((book: BookDto) => (
                            <Grid item key={book.id}>
                                <Book {...book}/>
                            </Grid>
                        ))
                    }
                </Grid>
                <Grid container direction="row" justify="center">
                    <Pagination count={Math.ceil(results.totalItems/10)} variant="outlined" className={styles.pagination} onChange={handlePageChange}/>
                </Grid>
            </Paper>
        </div>
    )
}
