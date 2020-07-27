import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { handleSignin } from '../util/functions';
import { AuthContext } from '../context/Auth';

const Login = () => {
  const history = useHistory();
  const { setAuth } = useContext(AuthContext);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isCreated = await handleSignin(user);
      if (isCreated) {
        alert('Signin successful');
        await setAuth(user.email);
        history.push('/');
      } else {
        alert(isCreated.error);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='login'>
      <div className='center'>
        <img
          className='login-img'
          src={require('../assets/images/lock.png')}
          alt='signup'
        />
        <p className='login-title'>Sign in</p>

        <form className='login-form' onSubmit={handleSubmit}>
          <input
            className='input'
            type='email'
            placeholder='Email Address *'
            required
            name='email'
            value={user.email}
            onChange={handleChange}
          />
          <input
            className='input'
            type='password'
            placeholder='Password *'
            required
            name='password'
            value={user.password}
            onChange={handleChange}
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
