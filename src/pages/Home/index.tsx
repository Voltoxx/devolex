import React, { Component, ChangeEvent } from 'react';
import SearchBox from '../../components/SearchBox';
import styled from 'styled-components';

const PageTitle = styled.h1`
  color: red;
  font-size: 2em;
  text-align: center;
`;

class Home extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      pokemons: [],
      search: '',
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
      .then((response) => response.json())
      .then((name) => this.setState({ pokemons: name.results }));
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div>
        <PageTitle>Bienvenue sur Devolex</PageTitle>
        <SearchBox
          placeholder="Rechercher un pokemon"
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Home;
