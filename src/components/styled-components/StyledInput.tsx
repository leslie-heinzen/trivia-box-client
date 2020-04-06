import styled from 'styled-components'
import Input from '../Input'

export const StyledInput = styled(Input)`
  display: flex;
  flex-direction: column;
  align-items: center;

  label:first-child {
    background: greenyellow;
  }

  input {
    margin-top: .25em;
    margin-bottom: .5em;
    padding: .25em;
    text-align: center;
    font-family: inherit;
    font-size: .8em;
    border-radius: 3px;
    border: 2px solid black;
  }
`
