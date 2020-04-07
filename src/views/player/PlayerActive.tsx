
import React from "react";
// Types
import { PlayerActiveProps } from "../../types/props";
// Components
import { StyledAnswerGrid } from "../../components/styled-components/StyledAnswerGrid";

const PlayerActive: React.FC<PlayerActiveProps> = ({ answers, selectedAnswer, onClick }) => {
  return <>
    <p>choose wisely.</p>
    <StyledAnswerGrid answers={answers}
      selectedAnswer={selectedAnswer}
      disabled={answers?.some(a => a.answer === selectedAnswer) || false}
      onClick={onClick} />
  </>
}

export default PlayerActive;
