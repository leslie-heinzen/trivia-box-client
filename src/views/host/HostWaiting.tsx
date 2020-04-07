
import React from "react";
// Types
import { HostWaitingProps } from "../../types/props";
// Components
import { Button } from "../../components/styled-components/Button";
import { JumboText } from "../../components/styled-components/JumboText";

const HostWaiting: React.FC<HostWaitingProps> = ({ gameType, onClick }) => {
  return <>
    <JumboText>{gameType && `${gameType} trivia.`.toUpperCase()}</JumboText>
    <p>let's get this show on the road.</p>
    <Button onClick={onClick}>start.</Button>
  </>
}

export default HostWaiting;
