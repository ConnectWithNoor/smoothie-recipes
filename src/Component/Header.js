import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <ul className='header__flex'>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/login'>Login</Link>
          </li>

          <li>
            <Link to='/favourites'>Favourites</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
