import React from 'react';
import { bool, func } from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link to='/' className='logo'>
        <span className='display-block'>Home</span>
        <span className='display-block'>Auction</span>
        <span className='display-block'>Refunds</span>
      </Link>

      <ul>
        <li>
          <Link to='/' onClick={() => setOpen(!open)}>
            home
          </Link>
        </li>
        <li>
          <Link to='/company' onClick={() => setOpen(!open)}>
            company
          </Link>
        </li>
        <li>
          <Link to='/process' onClick={() => setOpen(!open)}>
            process
          </Link>
        </li>
        <li>
          <Link to='/faq' onClick={() => setOpen(!open)}>
            faq
          </Link>
        </li>
        <li>
          <Link to='/contact' onClick={() => setOpen(!open)}>
            contact
          </Link>
        </li>
      </ul>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Menu;
