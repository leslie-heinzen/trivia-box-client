import styled from 'styled-components'

interface Props {
  percentage: number
}

export const StyledProgressBar = styled.div<Props>`
  width: 100%;
  height: 35px;
  background: black;
  > div {
    background: greenyellow;
    width: ${({ percentage }) => percentage + '%'};
    height: 35px;
    transition: width .25s ease-out;
  }
`



