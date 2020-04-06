import styled from 'styled-components'

interface Props {
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Select = styled.select<Props>`
  font-family: inherit;
  font-size: inherit;
  border-radius: 3px;
  border-color: black;
  border-width: 2px;
  background: greenyellow;
  padding: 5px;
`
