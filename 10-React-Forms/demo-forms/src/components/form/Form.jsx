import { useState } from "react";

const validate = (input) =>{
  let errors= {};

  if(!/^[a-zA-Z]+$/.test(input.name)){
    errors.name = 'Debe contener solo letras'
}
if(!/\S+@\S+\.\S+/.test(input.email)){
    errors.email = 'No es un email valido'
}
 return errors;
}

const Form = () => {
    const [input, setInput] = useState({
        name: '',
        email: ''
    });

    const [errors, setErrors]= useState ({});

    const handleChange =(event)=>{
          
          setInput({
            ...input, [event.target.name]: event.target.value
          })

          setErrors(validate(input))
    }
   const onSumbit = (event)=>{
      event.preventDefault();
      setInput({
        name:'',
        email:''
      });
   }

    return (
        <form onSubmit={onSumbit}>
           <label htmlFor="name">Name: </label>

           <input 
           type="text" 
           name='name' 
           value={input.name}
           onChange={handleChange}
           />
           {errors.name !== '' && <p style={{color: 'red'}}>{errors.name}</p> }
           

           <hr style={{borderStyle: 'none'}}/>
           <label htmlFor="email">Email: </label>

           <input 
           type="email" 
           name='email' 
           value={input.email} 
           onChange={handleChange}
           />
           {errors.name !== '' && <p style={{color: 'red'}}>{errors.email}</p> }

           <hr style={{borderStyle: 'none'}}/>
           <button 
           type="sumbit" 
           disabled={!input.name || !input.email || errors.name || errors.email }
           >Enviar</button>
        </form>
    )
}

export default Form;