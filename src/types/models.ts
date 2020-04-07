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
