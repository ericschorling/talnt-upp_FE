import React from 'react'


const reducer = (state, action) => {
    const {span,type,name, modal, note} = action
    switch(type){
        case "CHANGE_SPAN":
            return {...state, spanishidden: span }
        case "CHANGE_NAME":
            return {...state, spanishidden:false, name}
        case "CHANGE_COACHING_MODAL":
            return {...state, coachingModal: modal}
        case "ADD_COACHING_NOTE":
            return {...state, activeTM:note }
        default :
            return state
    }
}

export default  reducer