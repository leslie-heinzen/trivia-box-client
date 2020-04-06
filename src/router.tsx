import React from "react";
import Host from "./views/host/Host";
import Player from "./views/player/Player";
import Lobby from "./views/Lobby";
import RoomSetup from "./views/RoomSetup";
import { mount, route } from 'navi'

const routes = 
  mount({
    '/': route({
      title: 'Lobby',
      view: <Lobby />,
    }),
    '/setup': route({
      title: 'Setup',
      view: <RoomSetup />,
    }),
    '/:roomCode/host': route(req => ({
        title: 'Host',
        view: <Host roomCode={req.params.roomCode}/>,
      })),
    '/:roomCode/player/:name': route(req => ({
        title: 'Player',
        view: <Player roomCode={req.params.roomCode} playerName={req.params.name} />,
      })),
  });

export default routes;