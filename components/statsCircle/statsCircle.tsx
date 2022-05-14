import { Box, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid/Grid';
import { BorderStyle } from '@material-ui/icons';
import React from 'react'

interface StatData {
    currentValue: number,
    unit: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
        borderColor: theme.palette.secondary.main,
        borderStyle: 'solid',
        borderWidth: '0.3rem',
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        padding: '1rem',
        background: 'none',
        textAlign: 'center',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
  }),
);

export default function StatsCircle(props: StatData) {
    const styles = useStyles();
    return (
        <div>
            {
                props && (
                    <Grid container direction="column" spacing={1} alignItems="center">
                        <Grid item>
                            <Box className={styles.box}>
                                <Typography variant="h4">
                                    { props.currentValue }
                                </Typography>
                                
                            </Box>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                { props.unit }
                            </Typography>
                        </Grid>
                    </Grid>
                    
                )
            }
            
        </div>
    )
}

