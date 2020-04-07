import styled, { keyframes } from 'styled-components'
interface Props {
  message?: string
}

export const PlayerUpdate = styled.p<Props>`
  font-family: inherit;
  font-size: 2rem;
  background: greenyellow;
  position: absolute;
  bottom: 2em;
  left: -20em;
  padding-left: 2em;
  animation: 4s ease ${({ message }) => message ? playerIn : ''};
`;

const playerIn = keyframes`
  0% { left: -20em; }
  25% { left: 0; }
  75% { left: 0; }
  100% { left: -20em; }
`;
