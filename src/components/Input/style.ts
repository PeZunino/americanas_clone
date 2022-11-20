import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  width: 611px;
  height: 40px;
  border-radius: 8px;
  margin: 0px 48px 0px 48px;
  display: flex;
  align-items: center;

  padding: 11px 12px 11px 16px;

  box-shadow: rgba(0, 0, 0, 0.12) 0px 10px 15px;
  input {
    width: inherit;
  }
  .search-icon {
    color: red;
    margin-left: 5px;
  }
`;
