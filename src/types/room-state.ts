import { PlayerEntity, GameQuestionEntity, GameState } from "./models";

export interface State {
  gameState: GameState
  currentQuestion: GameQuestionEntity
  players: PlayerEntity[]
  playerUpdateMessage: string
  winnerMessage: string
}