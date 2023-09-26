import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  width: 30%;
  padding: 0.5rem;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  margin: 0.5rem 0;
  justify-content: center;
  margin-left: 35%;
`;

interface SearchBoxProps {
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder,
  handleChange,
}) => (
  <SearchInput
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

export default SearchBox;
