import { ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME } from "./types";
import axios from "axios";

export const addProduct = (product)=>{
 return {type: ADD_PRODUCT, payload: product};
}

export const deleteProduct = (id)=>{
  return {type: DELETE_PRODUCT, payload: id};
}

export const getStoreName = ()=>{
    return (dispatch)=> {
       axios('http://localhost:3001/store')
       .then(({data})=>{
        return dispatch({type:GET_STORE_NAME, payload: data.name});
      })  
    }
}