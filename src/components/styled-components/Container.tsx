import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  font-size: 1.5rem;
  padding-top: 2em;

  a {
    margin-top: 2rem;
    background: black;
    color: white;
  }

  @media (min-width: 768px) {
    padding-top: 4em;
  }
`;
