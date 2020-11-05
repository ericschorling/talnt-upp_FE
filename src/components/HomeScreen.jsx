import React, { useContext, useEffect } from 'react'
import { StateContext } from '../context'
import {useAuth0} from '@auth0/auth0-react'
import { getLoggedInUser } from '../methods';


const HomeScreen = () => {
    const { user, isAuthenticated, getAccessTokenSilently} = useAuth0()
    const [value, dispatch] = useContext(StateContext)

    useEffect(()=>{
        getLoggedInUser(dispatch, user, isAuthenticated, getAccessTokenSilently)
    }, [dispatch]);
    console.log(value.user)
    console.log(isAuthenticated)
    return (
        <div>
            <h1>
                {`Welcome,  
                ${value.user.name ? value.user.name : null},
                to Talnt-Upp`}
            </h1>
        </div>
    )
}

export default HomeScreen