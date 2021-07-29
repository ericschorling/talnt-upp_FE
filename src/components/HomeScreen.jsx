import React, { useContext, useEffect } from 'react'
import { StateContext } from '../context'
import {useAuth0} from '@auth0/auth0-react'
import { getLoggedInUser } from '../methods';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AuthenticationButton from './AuthenticationButton'
import SignupButton from './SignupButton'
import Card from '@material-ui/core/Card'
import LoginButton from './LoginButton';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>({
    linkButton: {
        textDecoration: "none",
        color: 'black'
    }
}))
const HomeScreen = () => {
    const classes = useStyles()
    const { user, isAuthenticated, getAccessTokenSilently} = useAuth0()
    const [value, dispatch] = useContext(StateContext)

    useEffect(()=>{
        getLoggedInUser(dispatch, user, isAuthenticated, getAccessTokenSilently)
    }, [dispatch]);
    console.log(value.user)
    console.log(isAuthenticated)
    return (
        <>
            <Container>
                <Grid container direction="row" justify="space-evenly" alignItems="center">
                    <Grid justify="center" direction="row" item xs = {12}>
                        <Typography variant="h1">
                            TaLnt-Upp
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h2">Manage Talent and Imporve Engagement</Typography>
                        <Typography variant="h6">a fully featured app for managers to improve engagement and performance.</Typography>
                        <br />
                        </Grid>
                    <Grid item xs={12}>
                        
                    </Grid>
                    <Grid item xs={8} direction="row" justify="space-evenly" alignItems="center">
                        <Container maxWidth='lg'>
                        <h1>
                            {`Welcome,  
                                ${value.user.name ? value.user.name : null},
                            to Talnt-Upp`}
                        </h1>
                        {isAuthenticated? 
                                <AuthenticationButton /> :
                                <>
                                    <SignupButton /> 
                                    <LoginButton/>
                                </>
                        }
                        </Container>                           
                    </Grid>
                    <Grid item xs={4}>
                        <Card >
                            <Typography variant="h4">
                                Quick Links
                            </Typography>
                                <Link className={classes.linkButton} to='/leader_view'>
                                    <Button variant="contained">
                                        Leader View
                                    </Button>
                                </Link>
                            <Box >
                                <Link className={classes.linkButton} to='/leader_view'>
                                    <Button variant="contained">
                                        Add TM
                                    </Button>
                                </Link>
                            </Box>
                            <Link className={classes.linkButton} to='/leader_view'>
                                <Button variant="contained">
                                    Team Page
                                </Button>
                            </Link>
                        </Card>
                    </Grid>
                </Grid>
                
            </Container>
        </>
    )
}

export default HomeScreen