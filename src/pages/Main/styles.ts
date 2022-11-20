import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Tag = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;

export const MenuContainer = styled.div`
  width: auto;
  height: 120px;
  margin-bottom: 10px;

  background-color: #f80032;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 14px;
  }
`;
export const UpMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  place-content: center;

  max-width: 1250px;
  height: 45px;
  margin: 24px 0px 15px 0px;

  a {
    width: 155px;
    height: 33px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const SingUpButton = styled.div`
  display: flex;

  align-items: center;
  place-content: center;
  margin-right: 48px;

  height: 80px;
  width: 194px;

  strong {
    height: 36px;
    margin-left: 8px;
  }
`;

export const Icons = styled.div`
  gap: 24px;
  display: flex;
  a {
    display: flex;
    color: #ffffff;
    width: auto;
    align-items: center;
  }
  svg {
    transition: all 0.4s;
    transform-origin: 50% 50%;
    &:hover {
      transform: scale(1.3);
    }
  }
`;
export const DownMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  place-content: center;

  max-width: 1250px;
  height: 45px;
  gap: 35px;
`;

export const CepContainer = styled.div`
  display: flex;
  align-items: center;
  width: 155px;
  height: 33px;
  svg {
    margin-right: 7px;
  }
`;

export const NichesContainer = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  border-radius: 4px;

  ul {
    display: flex;
    li {
      margin-right: 16px;
    }
  }
`;

export const PromoBanner = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  img {
    margin-bottom: 20px;
  }

  img.black {
    width: calc(70% - 110px);
  }
`;
