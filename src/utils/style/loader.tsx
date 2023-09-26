import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  width: 50px;
  height: 50px;
  margin: 20px auto;
  border: 5px solid #fff;
  border-bottom-color: #000;
  border-radius: 50%;
  box-sizing: border-box;
  animation: ${rotate} 1s linear infinite;
`;

function Loader() {
  return <StyledLoader />;
}

export default Loader;
