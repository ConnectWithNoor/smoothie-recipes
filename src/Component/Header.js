import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/Auth';
import { handleLogout } from '../util/functions';

const Header = () => {
  const { Auth } = useContext(AuthContext);

  return (
    <div className='header'>
      <div className='container'>
        <ul className='flex'>
          <li>
            <Link to='/'>Home</Link>
          </li>

          {Auth ? (
            <>
              <li>
                <Link onClick={handleLogout} to='/'>
                  Logout
                </Link>
              </li>

              <li>
                <Link to='/favourites'>Favourites</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
