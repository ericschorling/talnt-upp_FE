



export const getLoggedInUser = async (dispatch, user, isAuthenticated, getAccessTokenSilently) =>{
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    let email
    if(isAuthenticated){
        console.log(user.email)
        email = user.email
    }
    if (isAuthenticated){
        const token = await getAccessTokenSilently();
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
};

