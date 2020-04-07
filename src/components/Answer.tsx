import React from "react";
import { AnswerProps } from "../types/props";

export const Answer: React.FC<AnswerProps> = ({ className, answerEntity, selectedAnswer, onClick, disabled }) => {
  const { answer, gameAnswerId } = answerEntity;
  return <label className={className} htmlFor={gameAnswerId.toString()}>
    <input type="radio" 
      id={gameAnswerId.toString()}      
      checked={selectedAnswer === answer} 
      value={answer} 
      onChange={onClick} 
      disabled={disabled}
      hidden
      />{answer}</label>
};
