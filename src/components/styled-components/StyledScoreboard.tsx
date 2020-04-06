import styled from 'styled-components'
import Scoreboard from '../Scoreboard';

export const StyledScoreboard = styled(Scoreboard)`
  width: 90%;
  margin: .5em;
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  > div:nth-child(odd) { 
    background: greenyellow;
  }

  > div:nth-child(even) { 
    background: mediumpurple;
    color: white; 
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`
