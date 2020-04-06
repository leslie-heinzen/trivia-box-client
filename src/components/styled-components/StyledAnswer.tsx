import styled from 'styled-components'
import Answer from '../Answer';

export const StyledAnswer = styled(Answer)`
  margin-bottom: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  font-weight: bold;
  background: ${({ selectedAnswer, answerEntity, disabled }) => 
    disabled 
      ? selectedAnswer === answerEntity.answer
        ? 'greenyellow' 
        : 'gray'
      : 'mediumpurple'};
  cursor: pointer;
`
