import {useEffect} from 'react';
import './products.css';
import Card from '../Card/Card'
import { useSelector, useDispatch } from 'react-redux';
import { getStoreName } from '../../redux/actions/actions';


export function Products() {
   const dispatch = useDispatch();
   const {storeName, list} = useSelector((state)=>state);

  useEffect(()=>{
    dispatch(getStoreName());
  },[])

   return (
      <>
         <div className='productsBg'>
            <h1 className='productsTl'>{storeName}</h1>

            <div className='productsList'>
               {
                  list?.map (({name, id, price})=>{
                     return (
                        <Card
                        key={id}
                        name={name}
                        id={id}
                        price={price}
                        />
                     )
                  })
               }
            </div>
         </div>
      </>
   );
}
export default Products;

