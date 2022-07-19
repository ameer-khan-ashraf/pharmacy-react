import axios from 'axios';
console.log("hit",process.env.REACT_APP_BASE_URL);

const API = axios.create({baseURL:process.env.REACT_APP_BASE_URL});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

export const fetchProducts = () => API.get('/products');
export const buyProduct = (id) => API.patch(`products/${id}/buyproduct`);
export const productDetail = (id) => API.get(`products/${id}/detail`);

export const signIn = (formData) => API.post('/user/signin',formData);
export const updateUser = (updatedUser) => API.patch(`user/${updatedUser._id}/updateUser`, updatedUser);

export const fetchHistory = () =>API.get('/history');