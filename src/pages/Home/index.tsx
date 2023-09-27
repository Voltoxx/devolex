import React from 'react';
import styled from 'styled-components';
import Pokemons from '../../assets/Pokemons.png';
import PokedexImage from '../../assets/Pokedex.png';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
`;

const Header = styled.header`
  background-color: #007bff;
  padding: 80px 0;
`;

const PageTitle = styled.h1`
  font-size: 3em;
  color: white;
  margin-bottom: 10px;
`;

const PageSubtitle = styled.h2`
  font-size: 1.5em;
  color: white;
  margin-bottom: 40px;
`;

const PageSubtitle2 = styled.h2`
  font-size: 1.5em;
  color: black;
  margin-bottom: 40px;
`;

const ImageSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; /* Added for better responsiveness */
`;

const PageImage = styled.img`
  width: 40%;
  max-width: 400px; /* Added max-width for better responsiveness */
  margin: 20px; /* Adjusted margin for better spacing */
  border: 2px solid #007bff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

const FeaturesSection = styled.section`
  padding: 60px 0;
  background-color: #f9f9f9;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FeatureItem = styled.li`
  margin: 20px;
  font-size: 1.2em;
  color: #333;
`;

const Bouton = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 1.5em;
  padding: 1em 2em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 40px; /* Adjusted margin-top for better spacing */
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const ContactInfo = styled.div`
  margin-top: 40px; /* Adjusted margin-top for better spacing */
  font-size: 1.2em;
  color: #333;
`;

const Home = () => {
  const handleButtonClick = () => {
    window.location.href = '/pokedex';
  };

  return (
    <Container>
      <Header>
        <PageTitle>Devolex : Le Pokedex Nouvelle Génération</PageTitle>
        <PageSubtitle>
          Devenez le meilleur dresseur Pokémon avec Devolex !
        </PageSubtitle>
      </Header>

      <ImageSection>
        <PageImage src={Pokemons} alt="Pokemons" />
        <PageImage src={PokedexImage} alt="Pokedex" />
      </ImageSection>

      <FeaturesSection>
        <PageSubtitle2>Découvrez les fonctionnalités :</PageSubtitle2>
        <FeatureList>
          <FeatureItem>Recherchez un Pokémon par son nom</FeatureItem>
          <FeatureItem>Recherchez un Pokémon par son ID</FeatureItem>
          <FeatureItem>Recherchez un Pokémon par son type</FeatureItem>
          <FeatureItem>Recherchez un Pokémon par sa génération</FeatureItem>
          <FeatureItem>
            Découvrez les points faibles de vos Pokémon préférés
          </FeatureItem>
          <FeatureItem>Découvrez aussi leurs points forts</FeatureItem>
        </FeatureList>
      </FeaturesSection>

      <Bouton onClick={handleButtonClick}>Accéder au Pokedex</Bouton>

      <ContactInfo>
        Contactez-nous : contact@devolex.com | +1 (123) 456-7890
      </ContactInfo>
    </Container>
  );
};

export default Home;
