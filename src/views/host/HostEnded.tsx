import React from "react";
// Types
import { PlayerEntity } from "../../types";
// Components
import { Link } from "react-navi";
import { StyledScoreboard } from "../../components/styled-components/StyledScoreboard";
import { JumboText } from "../../components/styled-components/JumboText";

interface Props {
  winnerMessage: string
  players: PlayerEntity[] | undefined
}

const HostEnded: React.FC<Props> = ({ winnerMessage, players }) => {
  return <>
    <JumboText>game over.</JumboText>
    <p>{winnerMessage}</p>
    <StyledScoreboard players={players} />
    <Link href={`/`}>back to lobby.</Link>
  </>
}

export default HostEnded;
