import {FETCH,UPDATE} from '../constants/actionTypes';

export default (product={},action) =>{
    switch(action.type){
        case UPDATE:
        case FETCH:
            return action.payload;
        default:
            return product;
    }
}