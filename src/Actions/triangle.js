export const CHANGE_SIDE_SIZE = 'CHANGE_SIDE_SIZE';

export const changeSideValue = ( side, value) => {
    return (dispatch) => {
        dispatch({type: CHANGE_SIDE_SIZE, side, value})
    }
}

