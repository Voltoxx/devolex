import styled from 'styled-components';

interface CardProps {
  pokemon: {
    id: number;
    name: string;
    types: string[];
    generation: string;
  };
}

const typeColors: { [key: string]: string } = {
  Normal: 'BlanchedAlmond',
  Feu: 'red',
  Eau: 'MediumBlue',
  Plante: 'ForestGreen',
  Électrik: 'gold',
  Glace: 'lightblue',
  Combat: 'orange',
  Poison: 'purple',
  Sol: 'brown',
  Vol: 'lightblue',
  Psy: 'pink',
  Insecte: 'GreenYellow',
  Roche: 'brown',
  Spectre: 'purple',
  Dragon: 'darkpurple',
  Acier: 'grey',
  Tenebres: 'black',
  Fée: 'HotPink',
};

const getTypeColors = (types: string[]): string[] => {
  return types.map((type) => typeColors[type] || 'black');
};

const CardTitle = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const CardText = styled.p`
  font-size: 1em;
  text-align: center;
  color: #999;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  padding: 20px;
  margin: 20px;
  width: 170px;
  height: 350px;
  transition: 0.3s;
  background-color: #fff;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const CardType = styled.div`
  font-size: 1em;
  text-align: center;
  margin-bottom: 10px;
  /* Utilisez la fonction pour obtenir la couleur en fonction du type */
  color: ${(props) => props.color};
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const Card: React.FC<CardProps> = ({ pokemon }) => (
  <CardContainer>
    <CardImage
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
      alt={pokemon.name}
    />
    <CardTitle>{pokemon.name}</CardTitle>
    {pokemon.types.map((type, index) => (
      <CardType key={index} color={getTypeColors(pokemon.types)[index]}>
        {type}
      </CardType>
    ))}
    <CardText>N°{pokemon.id}</CardText>
  </CardContainer>
);

Card.defaultProps = {
  pokemon: {
    id: 0,
    name: '',
    types: [],
    generation: '',
  },
};

export default Card;
