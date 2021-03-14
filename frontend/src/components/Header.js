import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './../hooks';
import { StyledHeader } from './Header.styled';
import { Burger, Menu } from './../components';

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <StyledHeader ref={node}>
      {/* <a href='/' className='logo'>
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
      </nav> */}
      <Menu open={open} setOpen={setOpen} />
      <Burger open={open} setOpen={setOpen} />
    </StyledHeader>
  );
};

export default Header;
