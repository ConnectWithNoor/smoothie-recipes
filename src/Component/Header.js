import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from '../context/Auth';
import { handleLogout } from '../util/functions';

const Header = () => {
  const { Auth, setAuth } = useContext(AuthContext);
  const history = useHistory();

  const LogoutUser = async () => {
    try {
      const isLoggedOut = await handleLogout();
      if (isLoggedOut) {
        alert('Successfully Logged out');
        await setAuth(null);
        history.push('/');
      } else {
        alert('Something Went Wrong');
      }
    } catch (error) {
      console.log('error', error);
      alert('Something Went Wrong');
    }
  };

  return (
    <div className='header'>
      <div className='container'>
        <ul className='flex'>
          <li>
            <Link to='/'>Home</Link>
          </li>

          {Auth ? (
            <>
              <li onClick={LogoutUser}>Logout</li>

              <li>
                <Link to='/favourites'>Favourites</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/register'>Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
