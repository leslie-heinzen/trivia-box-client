import React from "react";
import { GameAnswerEntity } from "../types";

interface Props {
  className?: string,
  answerEntity: GameAnswerEntity,
  selectedAnswer: string,
  disabled: boolean
  onClick: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Answer: React.FC<Props> = ({ className, answerEntity, selectedAnswer, onClick, disabled }) => {
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
}

export default Answer;