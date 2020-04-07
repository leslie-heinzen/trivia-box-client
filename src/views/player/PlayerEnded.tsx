
import React from "react";
// Types
import { PlayerEndedProps } from "../../types/props";
// Components
import { Link } from "react-navi";
import { StyledScoreboard } from "../../components/styled-components/StyledScoreboard";
import { JumboText } from "../../components/styled-components/JumboText";

const PlayerEnded: React.FC<PlayerEndedProps> = ({ players }) => {
  return <>
    <JumboText>game over.</JumboText>
    <StyledScoreboard players={players} />
    <Link href={`/`}>back to lobby.</Link>
  </>
}

export default PlayerEnded;
