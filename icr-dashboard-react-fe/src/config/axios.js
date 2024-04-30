import axios from 'axios';

//secure Axios instance with token
export const axiosPrivate = axios.create({ baseURL: import.meta.env.VITE_REACT_API_URL });

// open Axios instance without token
export const axiosPublic = axios.create({ baseURL: import.meta.env.VITE_REACT_API_URL });


// axiosPrivate.interceptors.request.use(function (config) {
//   const token = localStorage.user && JSON.parse(localStorage.user).token;
//   config.headers.Authorization = token ? `Bearer ${token}` : '';
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });