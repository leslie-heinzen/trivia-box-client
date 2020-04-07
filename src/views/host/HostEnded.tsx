import React from "react";
// Types
import { HostEndedProps } from "../../types/props";
// Components
import { Link } from "react-navi";
import { StyledScoreboard } from "../../components/styled-components/StyledScoreboard";
import { JumboText } from "../../components/styled-components/JumboText";

const HostEnded: React.FC<HostEndedProps> = ({ winnerMessage, players }) => {
  return <>
    <JumboText>game over.</JumboText>
    <p>{winnerMessage}</p>
    <StyledScoreboard players={players} />
    <Link href={`/`}>back to lobby.</Link>
  </>
}

export default HostEnded;
