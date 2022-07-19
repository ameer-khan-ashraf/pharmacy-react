import {FETCH_HISTORY} from '../constants/actionTypes';

export default (history=[],action) =>{
    switch(action.type){
        case FETCH_HISTORY:
            return action.payload;
        default:
            return history;
    }
}