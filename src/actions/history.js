import {FETCH_HISTORY} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getHistory = () => async (dispatch) =>{
    try{
        const {data} = await api.fetchHistory();
        dispatch({type: FETCH_HISTORY, payload: data});
    }catch(error){
        console.log(error);
    }
}