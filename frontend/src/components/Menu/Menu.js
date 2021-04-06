import React from 'react';
import { bool, func } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <NavLink to='/' className='logo'>
        <span className='display-block'>Recover</span>
        <span className='display-block'>Hidden</span>
        <span className='display-block'>Funds</span>
      </NavLink>

      <ul>
        <li>
          <NavLink
            exact
            to='/'
            onClick={() => setOpen(!open)}
            className='main-nav'
            activeClassName='main-nav-active'
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to='/company'
            onClick={() => setOpen(!open)}
            className='main-nav'
            activeClassName='main-nav-active'
          >
            company
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to='/process'
            onClick={() => setOpen(!open)}
            className='main-nav'
            activeClassName='main-nav-active'
          >
            process
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to='/faq'
            onClick={() => setOpen(!open)}
            className='main-nav'
            activeClassName='main-nav-active'
          >
            faq
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to='/contact'
            onClick={() => setOpen(!open)}
            className='main-nav'
            activeClassName='main-nav-active'
          >
            contact
          </NavLink>
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
