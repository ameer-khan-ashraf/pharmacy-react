import {FETCH,UPDATE} from '../constants/actionTypes';
import * as api from '../api/index.js';



export const getProduct = (id) => async (dispatch) =>{
    try{
        const {data} = await api.productDetail(id);
        dispatch({type: FETCH, payload: data});
    }catch(error){
        console.log(error);
    }

}

export const buyProduct = (id) => async (dispatch) =>{
    try{
        const {data} = await api.buyProduct(id);
        dispatch({type: UPDATE, payload: data});
    }catch(error){
        console.log(error);
    }

}