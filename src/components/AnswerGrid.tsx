import React from "react";
import { StyledAnswer } from "./styled-components/StyledAnswer";
import { AnswerGridProps } from "../types/props";

export const AnswerGrid: React.FC<AnswerGridProps> = ({ className, answers, selectedAnswer, onClick, disabled }) => {
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
};