
import React, { useState } from "react";
// Hooks
import { useInterval } from "../../hooks/useInterval";
// Types
import { GameQuestionEntity } from "../../types";
//Components
import { JumboText } from "../../components/styled-components/JumboText";
import { StyledProgressBar } from "../../components/styled-components/StyledProgressBar";

interface Props {
  currentQuestion: GameQuestionEntity | undefined
  roundTime: number;
}

const HostActive: React.FC<Props> = ({ currentQuestion, roundTime }) => {
  const [count, setCount] = useState(1);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <>
    <JumboText>{currentQuestion?.question}</JumboText>
    <StyledProgressBar percentage={((count * 1000) / (roundTime-1)) * 100}>
      <div></div>
    </StyledProgressBar>
  </>
}

export default HostActive;
