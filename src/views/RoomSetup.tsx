import React, { useState, ChangeEvent, FormEvent } from "react";
// Data client
import { apiClient } from "../clients/api-client";
// Hooks
import { useNavigation } from 'react-navi'
// Types
import { GameType, GameState } from "../types/models";
// Components
import { Button } from "../components/styled-components/Button";
import { Container } from "../components/styled-components/Container";
import { Form } from "../components/styled-components/Form";
import { RoomLayout } from "../components/styled-components/RoomLayout";
import { Select } from "../components/styled-components/Select";

const RoomSetup: React.FC = () => {
  const navigation = useNavigation();
  const [gameType, setGameId] = useState(GameType.General.toString());

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newGameType = e.target.value;
    return setGameId(newGameType);
  }

  const startGame = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const game = await apiClient.addRoom({ gameId: gameType });
    navigation.navigate(`/${game.roomCode}/host`);
  }

  return <>
    <RoomLayout gameState={GameState.Waiting}>
      <Container>
        <h2>choose your poison.</h2>
        <Form onSubmit={startGame}>
          <Select defaultValue={GameType.General} onChange={onChange}>
            {Object.keys(GameType).map(g => {
              return <option key={g} value={g}>{g.toLowerCase()}.</option>
            })}
          </Select>
          <Button type="submit">create room.</Button>
        </Form>
      </Container>
    </RoomLayout>
  </>
}

export default RoomSetup;