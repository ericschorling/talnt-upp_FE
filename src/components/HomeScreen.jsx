import React, { useContext, useEffect } from 'react'
import { StateContext } from '../context'
import {useAuth0} from '@auth0/auth0-react'


const HomeScreen = (props) => {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const { user, isAuthenticated, getAccessTokenSilently} = useAuth0()
    const [value, dispatch] = useContext(StateContext)

    let email
    if(isAuthenticated){
        email = user.email
    }

    useEffect(()=>{
        (async function () {
            if (isAuthenticated){
                const token = await getAccessTokenSilently()
                const response = await fetch(
                    `${serverUrl}/api/leader/${email}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        },
                    }
                )
                const user = await response.json()
                dispatch({type:"UPDATE_USER", user: user[0]})
            }
        })();
    }, [dispatch]);
    console.log(value.user)
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