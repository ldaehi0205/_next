import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';

const Top = () => {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <Wrapper>
      <Menu inverted>
        <Menu.Item name="home" active={activeItem === 'home'} />
        <Menu.Item name="messages" active={activeItem === 'messages'} />
        <Menu.Item name="friends" active={activeItem === 'friends'} />
      </Menu>
    </Wrapper>
  );
};

export default Top;

const Wrapper = styled.div`
  /* position: fixed; */
  /* width: 100%; */
  z-index: 10;
`;
