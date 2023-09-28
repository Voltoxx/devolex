import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

interface PokemonData {
  id: number;
  name: string;
  apiTypes: { name: string; image: string }[];
  apiGeneration: number;
  stats: {
    HP: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
  apiEvolutions: {
    name: string;
    pokedexId: number;
  }[];
  apiPreEvolution: {
    name: string;
    pokedexIdd: number;
  } | null;
  image: string;
}

const PokemonName = styled.h1`
  color: palevioletred;
  font-size: 4em;
  text-align: center;
  margin-bottom: 20px;
`;

const PageContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const PokemonCard = styled.div`
  background-color: #f5f5f5;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  font-weight: bold;
`;

const PokemonImage = styled.img`
  max-width: 400px;
  margin: 0 auto;
`;

const EvolutionCard = styled.div`
  border: 2px solid #ccc;
  background-color: lightgrey;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  margin-right: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const Bouton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 25px 25px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #3e8e41;
  }
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: palevioletred;
  font-size: 2em;
  margin-top: 20px;
  display: block;
  text-align: center;
  margin-bottom: 20px;
  margin-top: -20px;
  font-weight: bold;

  &:hover {
    color: #e91e63;
  }
`;

const EvolutionsTxt = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  margin-top: 20px;
`;

const PokemonInfosCard = styled.div`
  background-color: lightgrey;
  max-width: 75%;
  margin: 0 auto;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
`;

const PokemonInfos = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  margin-top: 20px;
  padding-left: 0px;
`;

const PokemonInfosList = styled.ul`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  margin-top: 20px;
  padding-left: 0px;
`;

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DEFAULT_MESSAGE = 'Aucune information disponible';

function Pokemon() {
  const { name: pokemonName } = useParams();
  const [pokemon, setPokemon] = useState<PokemonData>({
    id: 0,
    name: '',
    apiTypes: [],
    apiGeneration: 0,
    stats: {
      HP: 0,
      attack: 0,
      defense: 0,
      special_attack: 0,
      special_defense: 0,
      speed: 0,
    },
    apiEvolutions: [],
    apiPreEvolution: [] as any,
    image: '',
  });

  const [prevPokemonName, setPrevPokemonName] = useState<string>('Bulbizarre');
  const [nextPokemonName, setNextPokemonName] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokebuildapi.fr/api/v1/pokemon/${pokemonName}`
        );
        const data = await response.json();

        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [pokemonName]);

  useEffect(() => {
    const fetchPrevPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokebuildapi.fr/api/v1/pokemon/${pokemon.id - 1}`
        );
        const data = await response.json();
        setPrevPokemonName(`#${data.id} ${data.name}`);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchNextPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokebuildapi.fr/api/v1/pokemon/${pokemon.id + 1}`
        );
        const data = await response.json();
        setNextPokemonName(`#${data.id} ${data.name}`);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPrevPokemon();
    fetchNextPokemon();
  }, [pokemon]);

  const {
    id,
    name,
    apiTypes,
    apiGeneration,
    stats,
    apiEvolutions,
    apiPreEvolution,
    image,
  } = pokemon;

  const prevPokemonId = id > 1 ? id - 1 : 1;
  const nextPokemonId = id + 1;

  return (
    <div>
      <PageContainer>
        <PokemonCard>
          <PokemonName>{name}</PokemonName>
          <PokemonImage src={image} alt={name} />
          <PokemonInfosCard>
            <PokemonInfos>ID: {id}</PokemonInfos>
            <PokemonInfos>
              Type(s):{' '}
              {apiTypes
                ? apiTypes.map((type) => type.name).join(', ')
                : DEFAULT_MESSAGE}
            </PokemonInfos>
            <PokemonInfos>Génération: {apiGeneration}</PokemonInfos>
            <PokemonInfos>Statistiques de base:</PokemonInfos>
            <PokemonInfosList>
              <li>HP: {stats.HP}</li>
              <li>Attaque: {stats.attack}</li>
              <li>Défense: {stats.defense}</li>
              <li>Attaque spéciale: {stats.special_attack}</li>
              <li>Défense spéciale: {stats.special_defense}</li>
              <li>Vitesse: {stats.speed}</li>
            </PokemonInfosList>
          </PokemonInfosCard>

          <div>
            <Link to={`/pokemon/${prevPokemonId}`}>
              <Bouton>Pokemon précédent : {prevPokemonName} </Bouton>
            </Link>
            <Link to={`/pokemon/${nextPokemonId}`}>
              <Bouton>Pokemon suivant : {nextPokemonName}</Bouton>
            </Link>
          </div>

          <DIV>
            {apiPreEvolution !== null && apiPreEvolution.name && (
              <div>
                <EvolutionsTxt>Sous-Évolution</EvolutionsTxt>
                <ul>
                  <li key={apiPreEvolution.name}></li>
                  <EvolutionCard>
                    <CustomLink to={`/pokemon/${apiPreEvolution.pokedexIdd}`}>
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${apiPreEvolution.pokedexIdd}.png`}
                        alt={apiPreEvolution.name}
                      />
                      <p>{apiPreEvolution.name}</p>
                    </CustomLink>
                  </EvolutionCard>
                </ul>
              </div>
            )}

            {apiEvolutions.length > 0 && (
              <div>
                <EvolutionsTxt>Évolution(s)</EvolutionsTxt>
                <div>
                  <ul>
                    {apiEvolutions.map((evolution) => (
                      <li key={evolution.name}>
                        <EvolutionCard>
                          <CustomLink to={`/pokemon/${evolution.pokedexId}`}>
                            <img
                              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolution.pokedexId}.png`}
                              alt={evolution.name}
                            />
                            <p>{evolution.name}</p>
                          </CustomLink>
                        </EvolutionCard>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </DIV>
        </PokemonCard>
      </PageContainer>
      <CustomLink to="/pokedex">Retour au pokedex</CustomLink>
    </div>
  );
}

export default Pokemon;
