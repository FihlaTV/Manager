import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types'

const INITIAL_STATE = {
    email:'',
    password: '',
    user: {},
    error: '',
    loading: false

}

export default (state = INITIAL_STATE,action) => {
    console.log(action);
    switch (action.type){
        case EMAIL_CHANGED:
            return {...state, email:action.payload};
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case LOGIN_USER:
            return {...state, loading: true, error: ''};
        case LOGIN_USER_SUCCESS:
            return {...state,...INITIAL_STATE, user: action.payload};
        case LOGIN_USER_FAIL:
            console.log("login user failed!!");
            return {...state, error: 'Authentication failed!!', user: {}, password: '', loading: false};
        default:
            console.log("last state");
            console.log(state);
            return state;
    }
}