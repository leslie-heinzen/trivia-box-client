import styled from 'styled-components';
import { GameState } from "../../types/models";

interface Props {
  gameState: GameState | undefined
}

export const RoomLayout = styled.div<Props>`
  height: calc(100vh - 74px);
  position: relative;
  background-image: linear-gradient(20deg,rgb(255, 255, 255),rgb(249, 203, 74));
  z-index: 1;
  ::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(20deg,rgb(112,184,219),rgb(255, 255, 255));
    z-index: -1;
    transition: opacity 0.8s linear;
    opacity: ${props => props.gameState === GameState.Active ? '0' : '1'};
  }

  h1 {
    margin: 0;
  }
`;
