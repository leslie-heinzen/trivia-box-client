
import React from "react";
// Types
import { HostPausedProps } from "../../types/props";
// Components
import { StyledScoreboard } from "../../components/styled-components/StyledScoreboard";
import { JumboText } from "../../components/styled-components/JumboText";

const HostPaused: React.FC<HostPausedProps> = ({ correctAnswer, players }) => {
  return <>
    <h1>answer.</h1>
    <JumboText>{correctAnswer?.answer}</JumboText><br />
    <StyledScoreboard players={players} />
  </>
}

export default HostPaused;
