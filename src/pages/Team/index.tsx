import { useState, useEffect } from 'react';
import Card from '../../components/Card';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Loader from '../../utils/style/loader';

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  generation: string;
}

const PageTitle = styled.h1`
  color: #333;
  font-size: 3em;
  text-align: center;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; /* Espacement entre les boutons */
  margin-top: 20px; /* Marge en haut du conteneur des boutons */
`;

const PageButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #000;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  justify-content: center;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const DeleteButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  margin-left: 10px; // Espacement entre le bouton et l'équipe enregistrée
  cursor: pointer;
  margin-bottom: 20px; // Espacement entre les équipes enregistrées
  &:hover {
    background-color: #fff;
    color: #ff0000;
    border: 1px solid #ff0000;
  }
`;

const NumEquipe = styled.h3`
  color: #333;
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 20px;
`;

const EquipeEnregistree = styled.h2`
  color: #333;
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
`;

const PageTxt = styled.p`
  color: red;
  font-size: 1.5em;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

function Team() {
  const [team, setTeam] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [savedTeams, setSavedTeams] = useState<Pokemon[][]>([]);

  const generateRandomTeam = async () => {
    setLoading(true);

    setTeam([]); // Réinitialiser l'équipe

    const randomIndices: number[] = [];
    while (randomIndices.length < 6) {
      const randomIndex = Math.floor(Math.random() * 898);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    const randomTeam: (Pokemon | null)[] = await Promise.all(
      randomIndices.map(async (index) => {
        try {
          const response = await fetch(
            `https://pokebuildapi.fr/api/v1/pokemon/${index}`
          );
          const data = await response.json();
          return {
            id: data.id,
            name: data.name,
            types: data.apiTypes.map((type: any) => type.name),
            generation: data.apiGeneration.toString(),
          } as Pokemon;
        } catch (error) {
          console.log(error);
          return null;
        }
      })
    );

    const filteredRandomTeam = randomTeam.filter((pokemon) => pokemon !== null);
    setTeam((prevTeam) => [...prevTeam, ...filteredRandomTeam] as Pokemon[]);
    setLoading(false);
  };

  const saveTeam = () => {
    setSavedTeams((prevTeams) => [...prevTeams, team]);
  };

  const deleteTeam = (indexToDelete: number) => {
    setSavedTeams((prevTeams) => {
      const updatedTeams = [...prevTeams];
      updatedTeams.splice(indexToDelete, 1);
      return updatedTeams;
    });
  };

  useEffect(() => {
    const savedTeamsFromStorage = localStorage.getItem('savedTeams');
    if (savedTeamsFromStorage) {
      setSavedTeams(JSON.parse(savedTeamsFromStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedTeams', JSON.stringify(savedTeams));
  }, [savedTeams]);

  return (
    <div>
      <PageTitle>Votre équipe Pokémon aléatoire</PageTitle>
      <ButtonContainer>
        <PageButton onClick={generateRandomTeam} disabled={loading}>
          Générer une équipe aléatoire
        </PageButton>
        <PageButton onClick={saveTeam}>Enregistrer l'équipe</PageButton>
      </ButtonContainer>
      {loading ? (
        <Loader />
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {team && team.length > 0 ? (
            team.map((pokemon, index) => (
              <Link to={`/pokemon/${pokemon.id}`} key={index}>
                <Card pokemon={pokemon} />
              </Link>
            ))
          ) : (
            <PageTxt>Aucune équipe à afficher.</PageTxt>
          )}
        </div>
      )}
      {savedTeams.length > 0 && (
        <div>
          <EquipeEnregistree>Équipes Enregistrées</EquipeEnregistree>
          {savedTeams.map((savedTeam, teamIndex) => (
            <div key={teamIndex}>
              <NumEquipe>Équipe {teamIndex + 1}</NumEquipe>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                {savedTeam.map((pokemon, index) => (
                  <Link to={`/pokemon/${pokemon.id}`} key={index}>
                    <Card pokemon={pokemon} />
                  </Link>
                ))}
                <DeleteButton onClick={() => deleteTeam(teamIndex)}>
                  Supprimer
                </DeleteButton>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Team;
