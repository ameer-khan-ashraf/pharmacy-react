import { AUTH, UPDATE_USER } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, navigate) => async (dispatch) =>{
    try{
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data })

        navigate('/products');
    } catch(error){
        console.log(error);
    }
};

export const updateUser = (user) => async (dispatch) =>{
    try{
        const {data} = await api.updateUser(user);
        dispatch({type: UPDATE_USER, data});
    }catch(error){
        console.log(error);
    }
};