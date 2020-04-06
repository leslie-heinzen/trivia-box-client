import React from "react";
import { GameAnswerEntity } from "../types";
import { StyledAnswer } from "./styled-components/StyledAnswer";

interface Props {
  className?: string,
  answers: GameAnswerEntity[] | undefined,
  selectedAnswer: string,
  disabled: boolean
  onClick: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AnswerGrid: React.FC<Props> = ({ className, answers, selectedAnswer, onClick, disabled }) => {
  return <div className={className}>    
    {answers?.map(a => {
      return <StyledAnswer
        key={a.answer} 
        answerEntity={a} 
        selectedAnswer={selectedAnswer}
        onClick={onClick}
        disabled={disabled} />        
    })}
  </div>
}

export default AnswerGrid;