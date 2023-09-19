import React, { useState } from "react";


const Person = ({name, lastname}) =>{
     
    const [person, setPerson] = React.useState ({name, lastname}) 

    const handleClick = () =>{
        setPerson({name: 'Juan', lastname: 'Castro'})
    }

    return(
        <div>
            <h1>Este es un Person</h1>
            <p>{person.name}</p>
            <p>{person.lastname}</p>
            <button onClick={handleClick}>cambiar a person</button>
        </div>
    )
}

export default Person;