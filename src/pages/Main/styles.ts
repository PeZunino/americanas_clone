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

  height: 45px;
  margin: 24px 0px 15px 0px;
  padding: 0px 15px 0px 15px;

  .marginRight {
    margin-right: 24px;
  }
`;
export const SecondMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  place-content: center;
  gap: 48px;
  height: 45px;
  padding: 0px 15px 0px 15px; ;
`;
export const SingUpButton = styled.div`
  align-items: stretch;
  display: flex;

  align-items: center;
  place-content: center;
  margin-right: 48px;

  height: 80px;
  width: 184px;

  strong {
    width: 100%;
    margin-left: 8px;
    height: 36px;
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
