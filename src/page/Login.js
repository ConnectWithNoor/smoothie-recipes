import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
      <div className='center'>
        <img
          className='login-img'
          src={require('../assets/images/lock.png')}
          alt='signup'
        />
        <p className='login-title'>Sign in</p>

        <form className='login-form'>
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

          <div className='remember'>
            <input
              type='checkbox'
              id='remember'
              name='remember'
              value='remember'
            />

            <label htmlFor='remember'> Remember me</label>
          </div>

          <button className='btn-reg' type='submit'>
            Sign in
          </button>
          <div className='cta-register'>
            <Link to='/'>Forget Password</Link>
            <Link to='login'>Don't have an account ? Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
