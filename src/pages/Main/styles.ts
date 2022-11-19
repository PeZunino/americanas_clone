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
  height: 160px;
  margin-bottom: 10px;

  background-color: #f80032;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  img {
    width: 8%;
  }
`;
export const MainMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  place-content: center;
  gap: 48px;
  height: 120px;
  padding: 0px 15px 0px 15px; ;
`;

export const SingUpButton = styled.div`
  height: 86px;
  width: 184px;
  display: flex;
  align-items: center;
  place-content: center;

  strong {
    margin-left: 5px;
    height: 36px;
    width: 230px;
    font-size: 14px;
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
