
import React from "react";
// Types
import { PlayerPausedProps } from "../../types/props";
// Components
import { StyledScoreboard } from "../../components/styled-components/StyledScoreboard";

const PlayerPaused: React.FC<PlayerPausedProps> = ({ players }) => {
  return <>
    <StyledScoreboard players={players} />
  </>
}

export default PlayerPaused;
