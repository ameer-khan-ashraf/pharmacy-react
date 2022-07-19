import {AUTH, LOGOUT, UPDATE_USER} from '../constants/actionTypes';

const authReducer = (state={authData:null}, action) =>{
    switch(action.type){
        case AUTH:
        case UPDATE_USER:
            localStorage.setItem('profile', JSON.stringify({...action.data}));
            return {...state, authData: action.data};
        case LOGOUT:
            localStorage.clear();
            return {...state, authData: action.data};
        default:
            return state;
    }
}

export default authReducer;
