// State
export interface State {
  gameState: GameState
  currentQuestion: GameQuestionEntity
  players: PlayerEntity[]
  playerUpdateMessage: string
  winnerMessage: string
}

// Hub Client
export type HubInvokeAction = "joinRoomAsHost" | "joinRoomAsPlayer";
export type HubMethod = "on" | "off";
export type HubListener =
  "sendQuestion" | "sendPlayers" | "sendGameState" | "sendWinnerMessage" | "sendPlayersUpdate";
export interface HubClientSpec {
  startAction: { methodName: HubInvokeAction, args: string[] }
  listeners: HubListener[]
}

// API
export declare type AddRoomQuery = {
  gameId: string
}

export declare type AddRoomResponse = {
  roomCode: string
}

export declare type GetRoomResponse = {
  room: RoomEntity
}

// Models
export declare type RoomEntity = {
  roomId?: number
  roomCode?: string
  players?: PlayerEntity[]
  gameId?: number
  game?: GameEntity
  state?: GameState
}

export declare type GameEntity = {
  gameId: number
  type: GameType
  gameMechanics: GameMechanicsEntity
}

export declare type GameMechanicsEntity = {
  gameMechanicsId: number
  rounds: number
  roundTime: number
  questions: GameQuestionEntity[]
}

export declare type GameQuestionEntity = {
  gameQuestionId: number
  question: string
  gameAnswers: GameAnswerEntity[]
}

export declare type GameAnswerEntity = {
  gameAnswerId: number
  answer: string
  correct: boolean
}

export declare type PlayerEntity = {
  playerId: number
  name: string
  score: number
  roomId: number
}

export enum GameState {
  Waiting = "Waiting",
  Active = "Active",
  BetweenRounds = "BetweenRounds",
  Ended = "Ended"
}

export enum GameType {
  General = "General",
  Sports = "Sports",
  Science = "Science",
  Music = "Music"
}
