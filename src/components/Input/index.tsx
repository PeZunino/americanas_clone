import React, { useCallback, useState } from 'react';
import { Container, Shadow } from './style';
import { IoIosSearch } from 'react-icons/io';
const Input: React.FC = () => {
  const [shadowDoc, setShadowDoc] = useState(false);
  const handleBlur = useCallback(() => {
    setShadowDoc(false);
  }, []);
  const handleFocus = useCallback(() => {
    setShadowDoc(true);
  }, []);

  return (
    <>
      <Container>
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="busque aqui seu produto"
          type="text"
        />
        <IoIosSearch size={30} />
      </Container>
      <Shadow activate={shadowDoc} />
    </>
  );
};

export default Input;
