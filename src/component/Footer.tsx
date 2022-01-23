import React from 'react';
import styled from 'styled-components';

const Footer = () => {
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
  text-align: center;
  bottom: 0px;
  /* transform: translateY(-100%); */
  span {
    vertical-align: middle;
    line-height: 60px;
  }
`;
