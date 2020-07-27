import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='register'>
      <div className='center'>
        {/* <img
          className='register-img'
          src={require('../assets/images/smoothie.png')}
          alt='signup'
        /> */}
        <p className='register-title'>Sign up</p>

        <form className='register-form'>
          <div className='flex'>
            <input
              className='input'
              type='text'
              placeholder='First Name *'
              required
            />
            <input
              className='input'
              type='text'
              placeholder='Last Name *'
              required
            />
          </div>
          <input
            className='input'
            type='email'
            placeholder='Email Address *'
            required
          />
          <input
            className='input'
            type='password'
            placeholder='Password *'
            required
          />

          <button className='btn-reg' type='submit'>
            Sign up
          </button>
          <div className='cta-login'>
            <Link to='login'>Already have an Account ? Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
