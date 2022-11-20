import React from 'react';
import { Container } from './styles';

interface ButtonProps {
  labelText: string;
}

export const Button: React.FC<ButtonProps> = ({ labelText }) => {
  return (
    <Container>
      <a href="#">
        <strong>{labelText}</strong>
      </a>
      <div />
    </Container>
  );
};
