import React from 'react';
import { Container } from './style';
import { IoIosSearch } from 'react-icons/io';
const Input: React.FC = () => {
  return (
    <Container>
      <input placeholder="busque aqui seu produto" type="text" />
      <IoIosSearch className="search-icon" size={30} />
    </Container>
  );
};

export default Input;
