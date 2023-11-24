import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });


export const createProject=(project)=>API.post('/api/createProject',project)
export const getProjectById=(id)=>API.get(`/api/getProjectById/${id}`)
export const getProject=()=>API.get(`/api/getProject`)



export const createMessage=(messageForm,id)=>API.post(`/api/createMessage/${id}`,messageForm)
export const showMessage=(id)=>API.get(`/api/showMessage/${id}`)
export const DeleteMessage=(id)=>API.delete(`/api/DeleteMessage/${id}`)

export const createContact=(formData)=>API.post('/api/createContact',formData)
export const getContacts = () => API.get('/api/getContacts')

export const signin =(formData)=>API.post('/api/users/loginUser',formData)
export const signup  =(formData)=>API.post('/api/users/registerUser',formData)