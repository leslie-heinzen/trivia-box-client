
import React from "react";
// Types
import { PlayerEntity } from "../../types";
// Components
import { Link } from "react-navi";
import { StyledScoreboard } from "../../components/styled-components/StyledScoreboard";
import { JumboText } from "../../components/styled-components/JumboText";

interface Props {
  players: PlayerEntity[] | undefined
}

const PlayerEnded: React.FC<Props> = ({ players }) => {
  return <>
    <JumboText>game over.</JumboText>
    <StyledScoreboard players={players} />
    <Link href={`/`}>back to lobby.</Link>
  </>
}

export default PlayerEnded;
