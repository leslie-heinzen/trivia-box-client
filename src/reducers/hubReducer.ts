import { State } from "../types";

export function hubReducer(state: State, [type, data]: any): State {
  switch (type) {
    case "sendQuestion":
      return { ...state, currentQuestion: data };
    case "sendPlayers":
      return { ...state, players: data };
    case "sendGameState":
      return { ...state, gameState: data };
    case "sendWinnerMessage":
      return { ...state, winnerMessage: data };
    case "sendPlayersUpdate":
      return { ...state, playerUpdateMessage: data };
  }
  return state;
}
