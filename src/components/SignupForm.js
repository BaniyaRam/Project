import React,{useEffect, useState} from 'react';
import validation from './validation';
import './Signup.css';

const SignupForm = ({submitForm}) => {
  const[values, Setvalues]=useState({
    fullname:"",
    email:"",
    password:"",
  });
  const [errors, setErrors]=useState({});
  const [dataIsCorect,setdataIsCorrect] =useState(false);

  const handleChange=(event)=>{
    Setvalues({
      ...values,
      [event.target.name]:event.target.value,
    });
  };
  const handleFormSubmit=(event)=>{
    event.preventDefault();
    setErrors(validation(values));
    setdataIsCorrect(true);

  };


  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className='title>'>Create Account</h2>
        </div>
        <form className='form-wrapper'>
          <div className='name'>
            <label className='label'>Full Name</label>
            <input 
            className='input' 
            type='text' name='fullname'
             value={values.fullname}
             onChange={handleChange}
             required
             />
             {
              errors.fullname && <p className='error'>{errors.fullname}</p>
             }
          </div>
          <div className='name'>
            <label className='label'>Email</label>
            <input 
            className='input' 
            type='email' 
            name='email' 
            value={values.email}
            onChange={handleChange}
            required
            />
           { errors.email && <p className='error'>{errors.email}</p>}
          </div>
          <div className='name'>
            <label className='label'>Password</label>
            <input 
            className='input' 
            type='password'
            name='password' 
            value={values.password}
            onChange={handleChange}
            required
            />
            {errors.password && <p className='error'>{errors.password}</p>}
          </div>
          <div>
          <button className='submit' onClick={handleFormSubmit}>
            Sign Up
            </button>
            </div> 
        </form>
      </div>
      
    </div>
  )
}


export default SignupForm;
