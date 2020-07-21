const SET_AUTHENTICATION = 'AUTH/SET-AUTHENTICATION'


let initialState = {
    isLogged: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATION:
            return {
                ...state,
                isLogged: action.islogged
            }

        default:
            return state;
    }
}

export const setAuthentication = (islogged) => ({ type: SET_AUTHENTICATION, islogged })

export default authReducer;