import { useEffect, useState } from "react";

const Profile = () =>{
  const [user, setUser] = useState([])
   useEffect(()=>{
     axios('https://jsonplaceholder.typicode.com/users'.then(({data}))
   },[])


    return(
        <div>
            <h2>Este es el perfil</h2>
            <p>Aca pondriamos mucha data</p>
        </div>
    )
}
export default Profile;