import {CREATE,GETCONTACT} from '../constants/actionTypes'
import * as api from '../api/index'

export const createContact=(formData)=>async(dispatch)=>{
    try {
        const {data} =await api.createContact(formData)
         dispatch({type:CREATE,payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const getContacts=()=>async(dispatch)=>{
    const {data} =await api.getContacts()
    dispatch({type:GETCONTACT,payload:data})

}