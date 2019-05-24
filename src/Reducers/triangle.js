import { CHANGE_SIDE_SIZE } from '../Actions/triangle'

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

const validateTriangle = (state) => {
    const { firstSide, secondSide, thirdSide } = state

    // The sum of two sides must be greather than the last side
    const firstValidation = (firstSide + secondSide) > thirdSide
    const secondValidation = (firstSide + thirdSide) > secondSide
    const thirdValidation = (thirdSide + secondSide) > firstSide

    const isValidTriangle = firstValidation && secondValidation && thirdValidation

    let triangleType = ""

    if(isValidTriangle)
    {
        if(firstSide === secondSide && firstSide === thirdSide)
        {
            triangleType = "Equilateral"
        } 
        else if (firstSide === secondSide || firstSide === thirdSide || secondSide === thirdSide)
        {
            triangleType = "Isosceles"
        } else
        {
            triangleType = "Scalene"
        }
    
    }
   
    return {
        isValidTriangle,
        triangleType
    }
}