
import React from "react";
// Types
import { GameAnswerEntity } from "../../types";
// Components
import { StyledAnswerGrid } from "../../components/styled-components/StyledAnswerGrid";

interface Props {
  answers: GameAnswerEntity[] | undefined
  selectedAnswer: string
  onClick: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PlayerActive: React.FC<Props> = ({ answers, selectedAnswer, onClick }) => {
  return <>
    <p>choose wisely.</p>
    <StyledAnswerGrid answers={answers}
      selectedAnswer={selectedAnswer}
      disabled={answers?.some(a => a.answer === selectedAnswer) || false}
      onClick={onClick} />
  </>
}

export default PlayerActive;
