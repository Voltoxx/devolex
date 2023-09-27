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

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const PageTitle = styled.h1`
  color: #333;
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.2rem;
  justify-items: center;
`;

const NoMatch = styled.p`
  color: red;
  font-size: 1.2em;
  text-align: center;
`;

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState<string>('');
  const [searchById, setSearchById] = useState<number | null>(null);
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
    const input = e.target.value;
    setSearch(input);
    const searchId = parseInt(input);
    setSearchById(isNaN(searchId) ? null : searchId);
  };

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const filteredPokemons = pokemons.filter((pokemon) => {
    const lowerCaseName = pokemon.name.toLowerCase();
    const isMatchingName = lowerCaseName.includes(search.toLowerCase());
    const isMatchingId =
      searchById !== null && pokemon.id.toString().includes(search);

    return (
      (isMatchingName || isMatchingId) &&
      (filter === '' ||
        pokemon.types.includes(filter) ||
        pokemon.generation === filter)
    );
  });

  return (
    <PageContainer>
      <PageTitle>Le Devolex</PageTitle>

      <Filter
        placeholder="Sélectionnez un filtre"
        handleFilterChange={handleFilterChange}
      />

      <SearchBox
        placeholder="Rechercher un Pokémon par son nom ou son ID"
        handleChange={handleChange}
      />

      {loading ? (
        <Loader /> // Affichez le loader lorsque loading est true
      ) : (
        <>
          {filteredPokemons.length === 0 ? (
            <NoMatch>Aucun Pokémon trouvé 😲</NoMatch>
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
        </>
      )}
    </PageContainer>
  );
};

export default Pokedex;
