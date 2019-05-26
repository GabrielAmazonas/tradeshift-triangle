export const CHANGE_USER_NAME = 'CHANGE_USER_NAME';

export const changeUserName = ( username ) => {
    return (dispatch) => {
        dispatch({type: CHANGE_USER_NAME, username })
    }
}

