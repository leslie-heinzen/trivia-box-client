import React, { useState, FormEvent } from "react";
// Hooks
import { useNavigation } from "react-navi";
// Types
import { GameState } from "../types";
// Components
import { Button } from "../components/styled-components/Button";
import { Container } from "../components/styled-components/Container";
import { Form } from "../components/styled-components/Form";
import { Link } from "react-navi";
import { RoomLayout } from "../components/styled-components/RoomLayout";
import { StyledInput } from "../components/styled-components/StyledInput";

const Lobby: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [roomCode, setRoomCode] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigation.navigate(`/${roomCode}/player/${name}`);
  }

  return <>
    <RoomLayout gameState={GameState.Waiting}>
      <Container>
        <Form onSubmit={onSubmit}>
          <StyledInput id="name"
            labelText="name."
            value={name}
            onChange={e => setName(e.target.value)} />
          <StyledInput id="roomCode"
            labelText="room code."
            value={roomCode}
            onChange={e => setRoomCode(e.target.value)} />
          <Button type="submit">join.</Button>
        </Form>
        <Link href={`/setup`}>start a new game.</Link>
      </Container>
    </RoomLayout>
  </>;
};

export default Lobby;