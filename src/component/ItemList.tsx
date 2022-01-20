import React from 'react';
import styled from 'styled-components';

const ItemList = ({ thumbnail, title }: any) => {
  return (
    <Wrapper>
      <Img src={thumbnail} />
    </Wrapper>
  );
};

export default ItemList;

const Wrapper = styled.div`
  height: 315px;
  /* width: 220px; */

  cursor: pointer;
`;
const Img = styled.img`
  height: 310px;

  outline: 1px solid #6c757d;
  border-radius: 8px;
  margin: auto;
`;
