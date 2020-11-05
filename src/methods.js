

const serverUrl = process.env.REACT_APP_SERVER_URL;

export const getLoggedInUser = async (dispatch, user, isAuthenticated, getAccessTokenSilently) =>{
    
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

// const getRows = async (user_id) =>{
//     const response = await fetch(`${serverUrl}/api/teammembers/${user_id}`, )
//         const teammembers = await response.json()
//         console.log(teammembers)
//         for (let tm of teammembers){
//             let coachingNotes=0;
//             let recognitionNotes =0;
//             let notes = await getNotes(tm.id)
//             notes.forEach(note=>{
//                 if(note.notetype ==='Coaching'){
//                     coachingNotes+=1
//                 }
//                 if(note.notetype === 'Recognition'){
//                     recognitionNotes +=1
//                 }
//             })
//             therows = [...therows, 
//                 createData(tm.name, tm.id, tm.department, coachingNotes, tm.step, recognitionNotes)]
//         }
//         console.log(rows)
//         console.log(therows)
//         return therows
//   }