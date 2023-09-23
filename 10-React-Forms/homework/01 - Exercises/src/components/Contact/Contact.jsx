import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate (inputs){
   let errors = {};
    if(!inputs.name){
      errors.name = 'Se requiere un nombre'
    }
    if(!regexEmail.test(inputs.email)){
      errors.email = 'Debe ser un correo electrónico'
    }
    if(!inputs.message){
      errors.message = 'Se requiere un mensaje'
    }

    return errors;
  };





export default function Contact () {

    const [inputs, setInputs] = React.useState ({
          name: '',
          email: '',
          message: ''
    });

    const [errors, setErrors] = React.useState ({
       name:'',
       email:'',
       message:''
    });

    const handleChange = (event)=>{
      setInputs({
        ...inputs, [event.target.name]: event.target.value
      })

       setErrors(validate({
         ...inputs, [event.target.name]: event.target.value,
       }))
    }; 

    const handleSumbit = (event) =>{
      event.preventDefault();
        
       const errorsArray = Array.from(errors)
       if(errorsArray.length === 0){
        alert('Datos completos');
        setInputs({
          name:'',
          email:'',
          message:''
        });
        setErrors(validate)
       }else{
        alert("Debe llenar todos los campos");
       }
    };


  return(
   <div>
    <form onSubmit={handleSumbit}>
    <label htmlFor="name">Nombre:</label>
    <input 
    type="text" 
    name='name'
    value={inputs.name}
    placeholder='Escribe tu nombre...'
    onChange={handleChange}
    className={errors.name && 'warning'}
    />
    <p className='danger'>{errors.name}</p>

    <hr style={{borderStyle: 'none'}}/>

    <label htmlFor="email">Correo Electrónico:</label>
    <input 
    type="text"
    name='email'
    value={inputs.email}
    placeholder='Escribe tu email...' 
    onChange={handleChange}
    className={errors.email && 'warning'}
    />
    <p className='danger'>{errors.email}</p>

    <hr style={{borderStyle: 'none'}}/>

    <label htmlFor="message">Mensaje:</label>
    <textarea 
    type="text"
    name="message" 
    placeholder='Escribe tu mensaje...'
    id="" 
    cols="20" 
    rows="2"
    onChange={handleChange}
    className={errors.message && 'warning'}
    >
    
    </textarea>
    <p className='danger'>{errors.message}</p>

    <hr style={{borderStyle: 'none'}}/>

     
    <button type='sumbit'>Enviar</button>

    </form>



   </div>
  )
}

