export type HubInvokeAction = "joinRoomAsHost" | "joinRoomAsPlayer";
export type HubMethod = "on" | "off";
export type HubListener =
  "sendQuestion" | "sendPlayers" | "sendGameState" | "sendWinnerMessage" | "sendPlayersUpdate";
export interface HubClientSpec {
  startAction: { methodName: HubInvokeAction, args: string[] }
  listeners: HubListener[]
}