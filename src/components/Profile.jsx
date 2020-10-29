import React, {useContext} from 'react'
import {StateContext} from '../context'

const Profile = (props) =>{
    const [value, dispatch] = useContext(StateContext)
    const {name} = value
    return (
        <div>
            <h1>{name}'s profile</h1>
        </div>
    )
}

export default Profile