import React, { useState, useEffect, ChangeEvent } from 'react';
import Card from '../../components/Card';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchBox from '../../components/SearchBox';
import Filter from '../../components/Filter';
import Loader from '../../utils/style/loader';

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  generation: string;
}

const PageTitle = styled.h1`
  color: red;
  font-size: 2em;
  text-align: center;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.2rem;
  justify-items: center;
`;

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon');
        const data = await response.json();

        const pokemonData: Pokemon[] = data.map((pokemon: any) => ({
          id: pokemon.id,
          name: pokemon.name,
          types: pokemon.apiTypes.map((type: any) => type.name),
          generation: pokemon.apiGeneration.toString(),
        }));

        setPokemons(pokemonData);
        setLoading(false);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors du chargement des données.",
          error
        );
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const filteredPokemons = pokemons.filter((pokemon) => {
    const lowerCaseName = pokemon.name.toLowerCase();

    return (
      lowerCaseName.includes(search.toLowerCase()) &&
      (filter === '' ||
        pokemon.types.includes(filter) ||
        pokemon.generation === filter)
    );
  });

  return (
    <div>
      <PageTitle>Voici le Devolex</PageTitle>

      <Filter
        placeholder="Selectionnez un filtre"
        handleFilterChange={handleFilterChange}
      />

      <SearchBox
        placeholder="Rechercher un Pokémon"
        handleChange={handleChange}
      />

      {loading ? (
        <Loader /> // Affichez le loader lorsque loading est true
      ) : (
        <CardContainer>
          {filteredPokemons.map((pokemon) => (
            <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
              <Card
                pokemon={{
                  id: pokemon.id,
                  name: pokemon.name,
                  types: pokemon.types, // Laissez les types comme un tableau
                  generation: pokemon.generation,
                }}
              />
            </Link>
          ))}
        </CardContainer>
      )}
    </div>
  );
};

export default Pokedex;
