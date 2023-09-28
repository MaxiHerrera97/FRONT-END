import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail, cleanDetail } from "../../redux/actions/actions";
import { useParams } from "react-router-dom";

const Detail = ()=>{
   const dispatch = useDispatch();
   const {id} = useParams();

   const user = useSelector(state => state.user);

useEffect(()=>{
   dispatch(getUserDetail(id));

   return ()=> dispatch(cleanDetail());
},[id]);
    return(
        <div style={{backgroundColor: 'black', color: 'white', borderRadius: '40px', padding: '30px'}}>
             <h1>{user?.name}</h1>
             <p>Username: {user?.name}</p>
             <p>City: {user?.address?.city}</p>
             <p>Website: {user?.website}</p>
             <p>Company: {user?.company?.name}</p>
        </div>
    )
}
export default Detail;