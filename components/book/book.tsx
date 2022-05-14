import React from 'react'
import { Grid, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, Link } from '@material-ui/core'
import Image from 'next/image'
import UpdateProgress from '../updateProgress/updateProgress';
import BookDto from '../../data/models/book'


export default function Book(props: BookDto) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    

    return (
        <div>
            <Grid container direction="row" spacing={1} justify="flex-start" alignItems="flex-start">
                <Grid item>
                    <Image
                        src={props.images?.thumbnail ? props.images.thumbnail : ''}
                        width={80}
                        height={120}
                    />
                </Grid>
                <Grid item>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <Typography variant="h6">
                                <Link href={`/books/${props.id}`}>
                                    { props.title }
                                </Link>
                            </Typography>
                            <Typography variant="body1">
                                { props.authors?.toString() }
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                                Update Progress
                            </Button>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
            <Dialog open={open} maxWidth="sm" fullWidth={true} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Progress</DialogTitle>
            <DialogContent>
                <UpdateProgress></UpdateProgress>
            
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>
                Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
                Save
            </Button>
            </DialogActions>
        </Dialog>
        </div>
        
    )
}