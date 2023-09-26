import React, { useState, useEffect, ChangeEvent } from 'react';
import SearchBox from '../../components/SearchBox';
import styled from 'styled-components';

const PageTitle = styled.h1`
  color: red;
  font-size: 2em;
  text-align: center;
`;

const Home = () => {
  return (
    <div>
      <PageTitle>Bienvenue sur Devolex</PageTitle>
    </div>
  );
};

export default Home;
