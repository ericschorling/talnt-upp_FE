import React, { useContext, useEffect } from 'react'
import { StateContext } from '../context'
import {useAuth0} from '@auth0/auth0-react'
import { getLoggedInUser } from '../methods';


const HomeScreen = (props) => {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const { user, isAuthenticated, getAccessTokenSilently} = useAuth0()
    const [value, dispatch] = useContext(StateContext)

    let email
    if(isAuthenticated){
        console.log(user.email)
        email = user.email
    }

    useEffect(()=>{
        getLoggedInUser(dispatch, user, isAuthenticated, getAccessTokenSilently)
        // (async function () {
        //     if (isAuthenticated){
        //         const token = await getAccessTokenSilently()
        //         const response = await fetch(
        //             `${serverUrl}/api/leader/${email}`,
        //             {
        //                 headers: {
        //                     Authorization: `Bearer ${token}`
        //                 },
        //             }
        //         )
        //         const user = await response.json()
        //         dispatch({type:"UPDATE_USER", user: user[0]})
        //     }
        // })();
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