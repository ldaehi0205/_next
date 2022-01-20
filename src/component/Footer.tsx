import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const deff = (e) => {
    console.log('console');
    e.stopPropagation();
  };

  return (
    <>
      <Wrapper>
        <span>Copyrightⓒ2022 ldh All rights reserved.</span>
      </Wrapper>
    </>
  );
};

export default Footer;

const Wrapper = styled.footer`
  width: 100%;
  height: 50px;
  background-color: black;
  color: #fff;
  position: relative;
  /* bottom: -10px; */
  text-align: center;

  span {
    vertical-align: middle;
    line-height: 60px;
  }
`;
