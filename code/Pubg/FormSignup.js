import { useState, } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
   
  );


  return (
    <div className='form-content-right'>
  
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
         welcome Warning! Your game must be above 40 level.
        </h1><br /> 
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>WhatsApp no.</label>
          <input
              
            className='form-input'
            type='number'
            name='number'
            pattern='{1-9}'
            autoComplete='off'
            placeholder='Enter your phone no.'
            value={values.number}
            onChange={handleChange}
           
          />
          
          {errors.number && <p>{errors.number}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>BGMI Name</label>
          <input
            className='form-input'
            type='text'
            name='BgmiName'
            placeholder='Enter your game name'
            value={values.BgmiName}
            onChange={handleChange}
          />
          {errors.BgmiName && <p>{errors.BgmiName}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>BGMI ID</label>
          <input
            className='form-input'
            type='text'
            name='BgmiID'
            placeholder='Enter your game ID'
            value={values.BgmiID}
            onChange={handleChange}
          />
          {errors.BgmiID && <p>{errors.BgmiID}</p>}
        </div>

        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
     
      </form>
    </div>
  );
};

export default FormSignup;
