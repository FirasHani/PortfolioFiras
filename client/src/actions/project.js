import { CREATE, FETCH_ALL, FETCH_ID} from '../constants/actionTypes'
import * as api from '../api/index'

export const createProject =(project)=>async(dispatch)=>{
    try {
     const {data}=await api.createProject(project)
    
    dispatch({type:CREATE,payload:data})
    
    } catch (error) {
        console.log(error)
    }

}
export const getProjectById=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.getProjectById(id)
        dispatch({type:FETCH_ID,payload:data})
    } catch (error) {
        console.log(error)
    }

}
export const getProject=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.getProject(id)
        dispatch({type:FETCH_ALL,payload:data})
    } catch (error) {
        console.log(error)
    }

}
