

const reducer = (state, action) => {
    const {span,type,name, modal, note,tm, user, rows} = action
    switch(type){
        case "CHANGE_SPAN":
            return {...state, spanishidden: span }
        case "CHANGE_NAME":
            return {...state, spanishidden:false, name}
        case "CHANGE_COACHING_MODAL":
            return {...state, coachingModal: modal}
        case "ADD_COACHING_NOTE":
            return {...state, activeTM:note }
        case "UPDATE_ACTIVE_TM":
            return {...state, activeTM:tm}
        case "UPDATE_USER":
            return {...state, user: user}
        case "UPDATE_ROWS":
            return {...state, rows: rows}
        default :
            return state
    }
}

export default  reducer