import React, { useState } from "react";
// Data client
import { hubClient } from "../../clients/hub-client";
// Hooks
import { useHubClient } from "../../hooks/useHubClient";
// Types
import { GameState } from "../../types";
// Components
import { Container } from "../../components/styled-components/Container";
import { RoomLayout } from "../../components/styled-components/RoomLayout";
import PlayerActive from "./PlayerActive";
import PlayerPaused from "./PlayerPaused";
import PlayerEnded from "./PlayerEnded";
import PlayerWaiting from "./PlayerWaiting";

interface Props {
  playerName: string,
  roomCode: string
}

const Player: React.FC<Props> = ({ roomCode, playerName }) => {
  const { gameState, currentQuestion, players } = useHubClient({
    startAction: {
      methodName: "joinRoomAsPlayer",
      args: [playerName, roomCode]
    },
    listeners: ["sendQuestion", "sendPlayers", "sendGameState"]
  });

  const [selectedAnswer, setSelectedAnswer] = useState('');

  const submitAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(e.target.value);
    const isCorrect = currentQuestion?.gameAnswers
      .find(ga => ga.answer === e.target.value)?.correct;
    hubClient.invoke("submitAnswer", isCorrect);
  }

  return <>
    <RoomLayout gameState={gameState}>
      <Container>
        {(function () {
          switch (gameState) {
            case GameState.Active:
              return <PlayerActive answers={currentQuestion?.gameAnswers}
                selectedAnswer={selectedAnswer || ''}
                onClick={submitAnswer} />
            case GameState.BetweenRounds:
              return <PlayerPaused players={players} />
            case GameState.Ended:
              return <PlayerEnded players={players} />
            case GameState.Waiting:
            default:
              return <PlayerWaiting />
          }
        })()}
      </Container>
    </RoomLayout>
  </>
}

export default Player;
