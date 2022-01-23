import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';
import Link from 'next/link';

const Top = () => {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <Wrapper>
      <Menu inverted>
        <Link href="/">
          <a>
            <Menu.Item name="home" active={activeItem === 'home'} />
          </a>
        </Link>
        <Menu.Item name="Books" active={activeItem === 'Books'} />
        <Menu.Item name="About" active={activeItem === 'About'} />
      </Menu>
    </Wrapper>
  );
};

export default Top;

const Wrapper = styled.div`
  /* position: fixed; */
  /* width: 100%; */
  z-index: 10;

  .active {
    cursor: pointer;
  }
`;
