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
      <Menu open={open} setOpen={setOpen} />
      <Burger open={open} setOpen={setOpen} />
    </StyledHeader>
  );
};

export default Header;
