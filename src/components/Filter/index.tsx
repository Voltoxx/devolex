import React from 'react';
import styled from 'styled-components';

const FilterSelect = styled.select`
  width: 30%;
  padding: 0.5rem;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  margin: 0.5rem 0;
  justify-content: center;
  margin-left: 35%;
`;

interface FilterProps {
  placeholder: string;
  handleFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Filter: React.FC<FilterProps> = ({
  placeholder,
  handleFilterChange,
}) => (
  <FilterSelect placeholder={placeholder} onChange={handleFilterChange}>
    <option value="">Selectionnez un filtre</option>
    <optgroup label="Types">
      <option value="Plante">Plante</option>
      <option value="Feu">Feu</option>
      <option value="Eau">Eau</option>
      <option value="Insecte">Insecte</option>
      <option value="Normal">Normal</option>
      <option value="Poison">Poison</option>
      <option value="Électrik">Electrique</option>
      <option value="Sol">Sol</option>
      <option value="Fée">Fée</option>
      <option value="Combat">Combat</option>
      <option value="Psy">Psy</option>
      <option value="Roche">Roche</option>
      <option value="Spectre">Spectre</option>
      <option value="Glace">Glace</option>
      <option value="Dragon">Dragon</option>
      <option value="Ténèbres">Ténèbres</option>
      <option value="Acier">Acier</option>
      <option value="Vol">Vol</option>
    </optgroup>
    <optgroup label="Générations">
      <option value="1">Génération 1 (Rouge et Vert)</option>
      <option value="2">Génération 2 (Or et Argent)</option>
      <option value="3">Génération 3 (Rubis et Saphir)</option>
      <option value="4">Génération 4 (Diamant et Perle)</option>
      <option value="5">Génération 5 (Noir et Blanc)</option>
      <option value="6">Génération 6 (X et Y)</option>
      <option value="7">Génération 7 (Soleil et Lune)</option>
      <option value="8">Génération 8 (Épée et Bouclier)</option>
    </optgroup>
  </FilterSelect>
);

export default Filter;
