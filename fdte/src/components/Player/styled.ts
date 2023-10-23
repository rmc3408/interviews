import styled from 'styled-components'

export const PlayerWrapper = styled.div`
  height: 1rem;
  position: fixed;
  top: calc(50% - 64px);
  left: 50%;
  background-color: #ff3d71;
  transition: all .2s ease-in-out;

  &:hover {
    background-color: blue;
    transform: scale(1.4);
  }
`