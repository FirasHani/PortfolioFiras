import { CREATE_MESSAGE, FETCH_ID,DELETE_MESSAGE} from '../constants/actionTypes'
import * as api from '../api/index'

export const showMessage =(id)=>async(dispatch)=>{
    try {
        const {data}=await api.showMessage(id)
    
        dispatch({type: FETCH_ID,payload:data})
    
    } catch (error) {
        console.log(error)
    }

}
export const createMessage=(messageForm,id)=>async(dispatch)=>{
    try {
        const {data}=await api.createMessage(messageForm,id)
       // console.log(data)
       dispatch({type:CREATE_MESSAGE,payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const DeleteMessage=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.DeleteMessage(id)
        
       dispatch({type:DELETE_MESSAGE,payload:data})
    } catch (error) {
        console.log(error)
    }
}