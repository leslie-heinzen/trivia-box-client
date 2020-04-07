import React from "react";
// Data clients
import { hubClient } from "../../clients/hub-client";
// Hooks
import { useHubClient } from "../../hooks/useHubClient";
import { useRoom } from "../../hooks/useRoom";
// Types
import { GameState } from "../../types/models";
import { HostProps } from "../../types/props";
// Components
import { Container } from "../../components/styled-components/Container";
import { PlayerUpdate } from "../../components/styled-components/PlayerUpdate";
import { RoomCode } from "../../components/styled-components/RoomCode";
import { RoomLayout } from "../../components/styled-components/RoomLayout";
import HostWaiting from "./HostWaiting";
import HostEnded from "./HostEnded";
import HostPaused from "./HostPaused";
import HostActive from "./HostActive";

const Host: React.FC<HostProps> = ({ roomCode }) => {
  const room = useRoom(roomCode);
  const { gameState, currentQuestion, players, playerUpdateMessage, winnerMessage } = useHubClient({ 
    startAction: {
      methodName: "joinRoomAsHost",
      args: [roomCode]
    },
    listeners: ["sendQuestion", "sendPlayers", "sendGameState", "sendWinnerMessage", "sendPlayersUpdate"]
  });
  const startGame = () => {
    hubClient.send("startGame", room?.roomCode);
  };
  const correctAnswer = () => currentQuestion?.gameAnswers.find(ga => ga.correct);

  return <>
    <RoomLayout gameState={gameState}>
      <RoomCode>room code. {roomCode}.</RoomCode>
      <PlayerUpdate message={playerUpdateMessage}>{playerUpdateMessage}</PlayerUpdate>
      <Container>
          {(function() {
            switch(gameState) {
              case GameState.Active: 
                return <HostActive currentQuestion={currentQuestion} roundTime={room?.game?.gameMechanics.roundTime || 0} />
              case GameState.BetweenRounds: 
                return <HostPaused correctAnswer={correctAnswer()} players={players} />
              case GameState.Ended: 
                return <HostEnded players={players} 
                  winnerMessage={winnerMessage} />
              case GameState.Waiting:
              default: 
                return <HostWaiting gameType={room?.game?.type} onClick={startGame} />
            }
          })()}
      </Container>
    </RoomLayout>
  </>
};

export default Host;