import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

interface ShadowDiv {
  activate: boolean;
}
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
  z-index: 2;
  input {
    width: inherit;
  }
  svg {
    color: red;
    margin-left: 5px;
  }
`;

export const Shadow = styled.div<PropsWithChildren<ShadowDiv>>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
  visibility: hidden;
  opacity: 0;
  z-index: 0;

  ${props =>
    props.activate &&
    css`
      opacity: 1;
      visibility: visible;
      z-index: 1;
    `}
`;
