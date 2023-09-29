import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Suggestion from './pages/Suggestion';
import Pokemon from './pages/Pokemon';
import Team from './pages/Team';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
    }
    a {
        text-decoration: none;
    }
    body {
        margin: 0;
        padding: 0;
        background-color: #f3f2ff;
    }
    li {
        list-style: none;
    }
    ul {
        padding: 0;
    }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/suggestion" element={<Suggestion />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="/pokedex/:type" element={<Pokedex />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
