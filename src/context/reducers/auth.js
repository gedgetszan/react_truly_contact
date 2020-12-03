import {
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_USER,
} from '../../constants/actionTypes'


const auth = (state, { payload, type }) => {
    console.log('Auth Type: ', type);
    switch (type) {
        case REGISTER_LOADING:
        case LOGIN_LOADING:
            console.log('auth.js Switch Loading')
            return {
                ...state,
                auth: {
                    ...state.auth,
                    error: false,
                    loading: true,
                },
            };

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            console.log('auth.js Switch Success')
            return {
                ...state,
                auth: {
                    ...state.auth,
                    loading: false,
                    data: payload,
                },
            };

        case REGISTER_ERROR:
        case LOGIN_ERROR:
            console.log('auth.js Switch Error')
            return {
                ...state,
                auth: {
                    ...state.auth,
                    loading: false,
                    error: payload,
                },
            };

        case LOGOUT_USER:
            console.log('auth.js Logoutuser')
            return {
                ...state,
                auth: {
                    ...state.auth,
                    loading: false,
                    data: null,
                },
            };
        default:
            return state;
    }
};

export default auth;