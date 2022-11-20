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
    font-size: 14px;
    margin-left: 8px;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  svg {
    /* &:hover {
      
    } */
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
  gap: 48px;
  height: 45px;
  padding: 0px 15px 0px 15px; ;
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
