import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  width: 576px;
  height: 40px;
  border-radius: 8px;

  display: flex;
  align-items: center;

  padding: 0px 15px 0px 15px;

  input {
    width: inherit;
  }
  .search-icon {
    color: red;
    margin-left: 5px;
  }
`;
