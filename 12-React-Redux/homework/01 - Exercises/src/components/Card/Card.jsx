import React from 'react';
import './card.css';
import { deleteProduct } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';

const Card = ({id, name, price})=>{
   const dispatch = useDispatch();

    const handleDelete = ()=>{
       dispatch(deleteProduct(id));
    }


   return (
      <div className='cardBg'>
           <h5>{name}: </h5>
           <h5>${price}</h5>
           <button className='cardBtn' onClick={handleDelete}>X</button>
         </div>
   )
}

//export class Card extends React.Component{
//   constructor(props){
//      super(props)
//   }
//
//   render(){
//      return (
//         <div className='cardBg'>
//            <h5>{this.props.name}: </h5>
//            <h5>${this.props.price}</h5>
//            <button className='cardBtn'>X</button>
//         </div>
//      )
//   };
//};

export default Card;
