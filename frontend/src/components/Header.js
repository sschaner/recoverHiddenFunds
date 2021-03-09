import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <a href='/' className='logo'>
        <ul className='logo__list'>
          <li className='logo__name'>Home</li>
          <li className='logo__name'>Auction</li>
          <li className='logo__name'>Refunds</li>
        </ul>
      </a>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__list-item'>
            <Link to='/' className='nav__link'>
              home
            </Link>
          </li>
          <li className='nav__list-item'>
            <Link to='/company' className='nav__link'>
              company
            </Link>
          </li>
          <li className='nav__list-item'>
            <Link to='/process' className='nav__link'>
              process
            </Link>
          </li>
          <li className='nav__list-item'>
            <Link to='/faq' className='nav__link'>
              faq
            </Link>
          </li>
          <li className='nav__list-item'>
            <Link to='/contact' className='nav__link'>
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
