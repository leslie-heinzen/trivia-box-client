import { State } from "../types/room-state";
import { HubListener } from "../types/hub";

export function hubReducer(state: State, [type, data]: [HubListener, any]): State {
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
    default:
      return state;
  }
}
