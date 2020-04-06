
import React from "react";
// Types
import { PlayerEntity, GameAnswerEntity } from "../../types";
// Components
import { StyledScoreboard } from "../../components/styled-components/StyledScoreboard";
import { JumboText } from "../../components/styled-components/JumboText";

interface Props {
  correctAnswer: GameAnswerEntity | undefined
  players: PlayerEntity[] | undefined
}

const HostPaused: React.FC<Props> = ({ correctAnswer, players }) => {
  return <>
    <h1>answer.</h1>
    <JumboText>{correctAnswer?.answer}</JumboText><br />
    <StyledScoreboard players={players} />
  </>
}

export default HostPaused;
