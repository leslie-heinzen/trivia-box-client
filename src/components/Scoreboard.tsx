import React from "react";
import { PlayerEntity } from "../types";

interface Props {
  className?: string
  players: PlayerEntity[] | undefined
}

const Scoreboard: React.FC<Props> = ({ className, players }) => {
  const sorted = players?.sort((a, b) => b.score - a.score);

  return <>
    <div className={className}>
      <div>
        <div><strong>PLAYER.</strong></div>
        <div><strong>SCORE.</strong></div>
      </div>
      {sorted?.map(p => {
        return <div key={p.playerId}>
          <div>{p.name}</div><div>{p.score}</div>
        </div>;
      })}
    </div>
  </>
}

export default Scoreboard;