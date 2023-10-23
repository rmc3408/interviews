import styled from 'styled-components'


export const OutsideOverlay = styled.div<{ $open: boolean; }>`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: ${ props => {
    return props.$open ? 'block' : 'none'
  }};
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  opacity: 1;
  -webkit-transition: opacity 400ms ease -in;
  -moz-transition: opacity 400ms ease -in;
  transition: opacity 400ms ease -in;
  pointer-events: auto;
  z-index: 3;
`

export const Modal = styled.div`
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 8px;
    height: 100%;
    background-color: white;
    overflow-y: scroll;
    -webkit-overflow-scrolling: none;
    -ms-overflow-style: none;

    @media(min-width: 380px) {
      margin: 5% auto;
      max-height: 75vh;
      max-width: 62em;
      width: 80%;

      &::-webkit-scrollbar {
        display: none;
      }
    }
`

export const CloseButton = styled.a`
  position: absolute;
  right: 16px;   
  top: 16px;
  z-index: 1;
  background-color: white;
  color: turquoise;
  font-size: 32px;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  border: 3px solid turquoise;
  text-align: center;
  text-decoration: none;
`

export const PokeBallContent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  //bottom: 10%;
  justify-content: center;
  background-color: purple;
  z-index: 4;
`

export const PokeBallImage = styled.img`
  position: fixed;
  object-fit: contain;
  bottom: 10%;
  height: 16rem;
`