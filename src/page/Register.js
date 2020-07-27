import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { handleRegister } from '../util/functions';
import { AuthContext } from '../context/Auth';

const Register = () => {
  const history = useHistory();
  const { setAuth } = useContext(AuthContext);

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
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
      const isCreated = await handleRegister(user);
      if (isCreated) {
        alert('Registraton successful');
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
    <div className='register'>
      <div className='center'>
        <img
          className='register-img'
          src={require('../assets/images/lock.png')}
          alt='signup'
        />
        <p className='register-title'>Sign up</p>

        <form className='register-form' onSubmit={handleSubmit}>
          <div className='flex'>
            <input
              className='input'
              type='text'
              placeholder='First Name *'
              required
              name='firstName'
              onChange={handleChange}
              value={user.firstName}
            />
            <input
              className='input'
              type='text'
              placeholder='Last Name *'
              required
              name='lastName'
              onChange={handleChange}
              value={user.lastName}
            />
          </div>
          <input
            className='input'
            type='email'
            placeholder='Email Address *'
            required
            name='email'
            onChange={handleChange}
            value={user.email}
          />
          <input
            className='input'
            type='password'
            placeholder='Password *'
            required
            name='password'
            onChange={handleChange}
            value={user.password}
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
