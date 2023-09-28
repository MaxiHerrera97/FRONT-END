import { GET_ALL_USERS, GET_USER_DETAIL, CLEAN_DETAIL } from "../actions/action-types";

const initialState = {
    users: [], //Aqui se estaria ingresando toda la informacion de la appi guardada en payload (data)
    user: {}
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
      case GET_ALL_USERS:
        return{
            ...state, //Creamos una copia del estado para no pisar ninguna propiedad al modificar y agregar la data.
            users: action.payload //Aqui ingresamos en users toda la informacion guardada en payload que seria data.
        }
      case GET_USER_DETAIL:
        return{
            ...state,
            user: action.payload
        }
        case CLEAN_DETAIL:
            return{
                ...state,
                user: {}
            }


       default:
        return {...state}
    }
}

export default reducer;