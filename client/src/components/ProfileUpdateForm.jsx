import React from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
const useStyles = makeStyles((theme) => ({
    grid: {
        textAlign: 'center',
        padding: theme.spacing(1)
    },
    container: {
        padding: theme.spacing(1),
    },
    divider: {
        backgroundColor: 'black',
    }
}))

const ProfileUpdateForm = () =>{
    const classes = useStyles();
    return (
        <Container className={classes.container} maxWidth="sm">
            <Card>
                <Grid container spacing={3}>
                    <form noValidate autoComplete="off">
                        <TextField
                        id="outlined-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                        variant="outlined"
                        />
                    </form>
                </Grid>
            </Card>
        </Container>
      );
}

export default ProfileUpdateForm