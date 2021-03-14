import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to='/' className='logo'>
        <span className='display-block'>Home</span>
        <span className='display-block'>Auction</span>
        <span className='display-block'>Refunds</span>
      </Link>

      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/company'>company</Link>
        </li>
        <li>
          <Link to='/process'>process</Link>
        </li>
        <li>
          <Link to='/faq'>faq</Link>
        </li>
        <li>
          <Link to='/contact'>contact</Link>
        </li>
      </ul>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
