

 const initialState = {
    name: 'Anthony Maximiliano',
    cohorte: '43A',
    number: 0
}
const reducer =(state= initialState, action)=>{
   switch(action.type){
       case 'AUMENTAR_NUMBER':
        return {
            ...state,
            number: state.number + 1
        }
        case 'CAMBIAR_NOMBRE':
            return{
                ...state,
                name: action.payload
            }
            default:
                return{...state}
   }
}