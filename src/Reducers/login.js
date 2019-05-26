import { CHANGE_USER_NAME } from '../Actions/login'

const INITIAL_STATE = {
    username: ''
}

export default function changeUserName (state = INITIAL_STATE, action) {
    switch(action.type){
        case CHANGE_USER_NAME:
            return {
                ...state,
                username: action.username
            }
        default:
            return {
                ...INITIAL_STATE
            }
    }
}
