import { Grid, Paper } from '@material-ui/core'
import Book from '../components/book/book'
import React from 'react'
import styles from '../styles/dashboard.module.scss';
import GoalsProgress from '../components/goalsProgress/goalsProgress';
import BookDto from '../data/models/book';
import { BookData } from '../data/bookData';


export default function Dashboard() {
    const bookData = BookData;
    return (
            <Grid container direction="row" spacing={2}>
                <Grid item sm={4}>
                    <Paper elevation={1}>
                        <div className={styles.Currently_Reading}>
                            <Grid container direction="column" spacing={1}>
                                {
                                    bookData.map((book: BookDto) => (
                                        <Grid container item key={book.id}>
                                            <Book {...book}/>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            
                        </div>
                    </Paper>
                </Grid>
                <Grid item sm={8}>
                    <Paper elevation={1}>
                        <div className={styles.Goals_Progress}>
                            <GoalsProgress></GoalsProgress>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
    )
}
