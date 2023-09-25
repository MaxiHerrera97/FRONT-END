import { createStore } from "redux";
import reducer from "./reducer";



const store = createStore(reducer);


store.dispatch({type: 'AUMENTAR_NUMBER'});
store.dispatch({type: 'CAMBIAR_NOMBRE', payload: {name: 'Gabriel Maximiliano', cohorte:'43a'}});


console.log(store.getState());