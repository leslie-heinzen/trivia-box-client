
import React from "react";
// Types
import { PlayerEntity } from "../../types";
// Components
import { StyledScoreboard } from "../../components/styled-components/StyledScoreboard";

interface Props {
  players: PlayerEntity[] | undefined
}

const PlayerPaused: React.FC<Props> = ({ players }) => {
  return <>
    <StyledScoreboard players={players} />
  </>
}

export default PlayerPaused;
