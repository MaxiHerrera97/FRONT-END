import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer/reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Con esta linea le decimos a windows que vamos a estar conectando la extension con nuestro proyecto

const store = createStore( //A esta constante llamada store le pasamos por parametros a reducer y composeEnhancer, a esta ultima le pasamos por parametro a applyMiddleware y a esta ultima le pasamos a thunkMiddleware
    reducer, // => este es el estado Global, mediante el cual vamos a hacer modificaciones.
    composeEnhancer(applyMiddleware(thunkMiddleware)) //esta linea nos permite traer informacion de alguna appi sin tener dificultades, es como un traductor
)

export default store;