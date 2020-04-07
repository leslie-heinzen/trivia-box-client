import { GameAnswerEntity, PlayerEntity, GameQuestionEntity, GameType } from "./models";

export interface HostProps {
  roomCode: string
}

export interface HostActiveProps {
  currentQuestion: GameQuestionEntity | undefined
  roundTime: number;
}

export interface HostPausedProps {
  correctAnswer?: GameAnswerEntity | undefined
  players: PlayerEntity[] | undefined
}

export interface HostEndedProps extends Omit<HostPausedProps, 'correctAnswer'> {
  winnerMessage: string
}

export interface HostWaitingProps {
  gameType?: GameType
  onClick: () => void
}

export interface PlayerProps extends HostProps {
  playerName: string
}

export interface PlayerActiveProps {
  answers?: GameAnswerEntity[] | undefined
  selectedAnswer: string
  onClick: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface PlayerPausedProps {
  players: PlayerEntity[] | undefined
}

export interface PlayerEndedProps extends PlayerPausedProps {}

export interface AnswerGridProps extends PlayerActiveProps {
  className?: string
  disabled: boolean
}

export interface AnswerProps extends Omit<AnswerGridProps, 'answers'> {
  answerEntity: GameAnswerEntity
}

export interface ScoreboardProps extends PlayerEndedProps {
  className?: string
}

export interface InputProps {
  className?: string
  id: string
  value: string
  labelText: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
