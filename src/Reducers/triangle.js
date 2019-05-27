import { CHANGE_SIDE_SIZE } from '../Actions/triangle'
import validateTriangle from '../Helpers/validateTriangle'

const INITIAL_STATE = {
    triangleType: '',
    isValidTriangle: false
}

export default function triangle (state = INITIAL_STATE, action) {
    switch(action.type){
        case CHANGE_SIDE_SIZE:
            if(action.value > 10){
                return {
                    ...state
                }
            }
            const updatedState = {
                ...state,
                [action.side]: action.value
            }

            const { isValidTriangle, triangleType} = validateTriangle(updatedState)

            return {
                ...updatedState,
                isValidTriangle,
                triangleType
            }
        default: 
            return {
                ...INITIAL_STATE
            }
    }
}

