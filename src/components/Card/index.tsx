import styled from 'styled-components';

interface CardProps {
  pokemon: {
    id: number;
    name: string;
    type: string;
    generation: string;
  };
}

const CardTitle = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  padding: 20px;
  margin: 20px;
  width: 200px;
  transition: 0.3s;
  background-color: #fff;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const Card: React.FC<CardProps> = ({ pokemon }) => (
  <CardContainer>
    <CardImage
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
      alt={pokemon.name}
    />
    <CardTitle>{pokemon.name}</CardTitle>
  </CardContainer>
);

Card.defaultProps = {
  pokemon: {
    id: 0,
    name: '',
    type: '',
    generation: '',
  },
};

export default Card;
