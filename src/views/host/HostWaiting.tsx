
import React from "react";
import { GameType } from "../../types";
import { Button } from "../../components/styled-components/Button";
import { JumboText } from "../../components/styled-components/JumboText";

interface Props {
  gameType?: GameType
  onClick: () => void
}

const HostWaiting: React.FC<Props> = ({ gameType, onClick }) => {
  return <>
    <JumboText>{gameType && `${gameType} trivia.`.toUpperCase()}</JumboText>
    <p>let's get this show on the road.</p>
    <Button onClick={onClick}>start.</Button>
  </>
}

export default HostWaiting;
