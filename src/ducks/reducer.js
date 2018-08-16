const initialState={
    user:{},
    heading:'',
    date:'',
    vlog_string:'',

}

const UPDATE_USER_DATA='UPDATE_USER_DATA'
const UPDATE_HEADING= "UPDATE_HEADING"
const UPDATE_DATE="UPDATE_DATE"
const UPDATE_VLOG_STRING= "UPDATE_VLOG_STRING"

function reducer(state=initialState,action){
    switch(action.type){
        case UPDATE_HEADING:
        return Object.assign({}, state, {heading:action.payload})

        case UPDATE_USER_DATA:
        return Object.assign({}, state, {user:action.payload})

        case UPDATE_DATE:
        return Object.assign({}, state, {date:action.payload})

        case UPDATE_VLOG_STRING:
        return Object.assign({}, state, {vlog_string:action.payload})
 

        default:return state;
    }
}

export function updateUserData(user){
    
    return{
        type:UPDATE_USER_DATA,
        payload:user
    }
}

export function updateHeading(heading){
    return{
        type:UPDATE_HEADING,
        payload:heading
    }
}

export function updateDate(date){
    return {
        type:UPDATE_DATE,
        payload:date
    }
}

export function updateVlogString(vlog_string){
    return {
        type:UPDATE_VLOG_STRING,
        payload:vlog_string
    }
}

export default reducer