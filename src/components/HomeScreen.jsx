import React, { useContext, useState } from 'react'
import { StateContext } from '../context'
import DoneIcon from '@material-ui/icons/Done'


const HomeScreen = (props) => {
    const [input, setInput] = useState('')
    const [value, dispatch] = useContext(StateContext)
    const {name, company, spanishidden} = value

    const _handleClick =()=>{
        return dispatch({type:"CHANGE_SPAN", span:!spanishidden})
    }
    const _handleNameUpdate=()=>{
        return dispatch({type:"CHANGE_NAME", name:input})
    }
    const _handleInput=(input)=>{
        setInput(input)
    }
    return (
        <div>
            <h1>
                Welcome 
                {
                    spanishidden ? 
                    <>
                        <input type='text' onChange={(e)=>_handleInput(e.target.value)}></input>
                        <button type='button' onClick={()=>_handleNameUpdate()}>
                            <DoneIcon/>
                        </button>
                    </> : 
                    <span onClick={()=>_handleClick()}>
                         {name} 
                    </span>
                } 
                to {company}
            </h1>
        </div>
    )
}

export default HomeScreen