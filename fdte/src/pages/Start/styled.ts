import styled from 'styled-components'
import Button from 'components/Button'
import img from 'assets/images/pokemonLogo.png'

export const StartWrapper = styled.div`
  position: relative;
  background: linear-gradient(105deg, #42e97c, #37f8d5);
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StartButton = styled(Button)`
  display: block;
  border-radius: 16px;
  border: 1px solid tomato;
  margin-top: 24px;
`

export const Image = styled.div`
  display: block;
  background-image: url(${img});
  background-repeat: no-repeat;
  width: 200px;
`