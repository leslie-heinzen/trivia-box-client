import React from "react";
import { ScoreboardProps } from "../types/props";

const Scoreboard: React.FC<ScoreboardProps> = ({ className, players }) => {
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