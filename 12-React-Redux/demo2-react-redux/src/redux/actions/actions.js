import { GET_ALL_USERS, GET_USER_DETAIL, CLEAN_DETAIL } from "./action-types";
import axios from "axios";


//export const getAllUsers = ()=>{
 //   return (dispatch)=>{
 //     fetch('https://jsonplaceholder.typicode.com/users')
 //     .then(response => response.json()) //Este metodo Json nos pasa este enlace a un objeto de JavaScript
 //     .then(users =>{
 //       return dispatch({type: GET_ALL_USERS, payload: users})
  //    })
  //  }
//}
//export const getAllUsers = ()=>{
    //return(dispatch)=>{
       // axios('https://jsonplaceholder.typicode.com/users')
        //.then (({data})=>{ //Aqui en esta linea hacemos destructuring de "Data" para traer la informacion de la appi
        // return dispatch({type:GET_ALL_USERS, payload: data})

      // })
    //}
//}

export const getAllUsers = () =>{
   return async (dispatch) =>{
        try{
            const {data} = await axios ('https://jsonplaceholder.typicode.com/users');
            return dispatch ({type: GET_ALL_USERS, payload: data})
        } catch (error){
            console.log(error);
        }
    }
}

export const getUserDetail = (id) =>{
    return async (dispatch) =>{
    try{
        const {data} = await axios (`https://jsonplaceholder.typicode.com/users/${id}`);
        return dispatch ({type: GET_USER_DETAIL, payload: data});
    } catch(error){
      console.log(error);
    }
    }
}

export const cleanDetail = ()=>{
    return {type: CLEAN_DETAIL}
}