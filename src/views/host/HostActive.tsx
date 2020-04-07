
import React, { useState } from "react";
// Hooks
import { useInterval } from "../../hooks/useInterval";
// Types
import { HostActiveProps } from "../../types/props";
//Components
import { JumboText } from "../../components/styled-components/JumboText";
import { StyledProgressBar } from "../../components/styled-components/StyledProgressBar";

const HostActive: React.FC<HostActiveProps> = ({ currentQuestion, roundTime }) => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <>
    <JumboText>{currentQuestion?.question}</JumboText>
    <StyledProgressBar percentage={((count * 1000) / (roundTime - 1000)) * 100}>
      <div></div>
    </StyledProgressBar>
  </>
}

export default HostActive;
