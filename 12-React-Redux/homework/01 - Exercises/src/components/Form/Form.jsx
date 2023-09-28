import React, { useState } from 'react';
import Caja from '../../assets/caja.png';
import './form.css';
import { addProduct } from '../../redux/actions/actions';
import {useDispatch} from "react-redux";

const Form = ()=>{
   const dispatch = useDispatch();
   const [product, setProduct] = useState({
      name: "",
      price: "",
      id: ""
   })

   const handleSumbit = (event)=>{
      event.preventDefault();

   dispatch(addProduct({
      ...product,
      id: Date.now()
   }))
   }

   const handleInputChange = (event) => {
            setProduct({ 
               ...product, 
               [event.target.name]: event.target.value
             });
         }

      return (
             <form className='formBg' onSubmit={handleSumbit}>
                <div className='inputBox'>
                   <label>Nombre: </label>
                   <input
                      name='name'
                      onChange={handleInputChange}
                      value={product.name}
                   />
                </div>
                <div className='inputBox'>
                   <label>Precio:</label>
                   <input
                      type='number'
                      name='price'
                      onChange={handleInputChange}
                      value={product.price}
                   />
                </div>
                <button className='formBtn'>¡ADD!</button>
                <img src={Caja} alt='' className='logo' />
             </form>
          )
}
export default Form;
//class Form extends React.Component{
//   constructor(props){
//      super(props)
//
//      this.state = {
//         name: "",
//         price: "",
//         id: ""
//      }
//   }
//
//   handleInputChange = (event) => {
//      this.setState({ ...this.state, [event.target.name]: event.target.value });
//   }
//
//   render(){
//      return (
//         <form className='formBg'>
//            <div className='inputBox'>
//               <label>Nombre: </label>
//               <input
//                  name='name'
//                  onChange={this.handleInputChange}
//                  value={this.state.name}
//               />
//            </div>
//            <div className='inputBox'>
//               <label>Precio:</label>
//               <input
//                  type='number'
//                  name='price'
//                  onChange={this.handleInputChange}
//                  value={this.state.price}
//               />
//            </div>
//            <button className='formBtn'>¡ADD!</button>
//            <img src={Caja} alt='' className='logo' />
//         </form>
//      )
//   }
//}
//
//export function mapDispatchToProps() {}
//
//export default connect(null, mapDispatchToProps)(Form);
