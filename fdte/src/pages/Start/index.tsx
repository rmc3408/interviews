import React from 'react'
import { useAppDispatch } from 'store/store'
import { on } from 'store/slices/game'
import * as S from './styled'
import Img from 'assets/images/pokemonLogo.png'


const StartPage = () => {
  const dispatch = useAppDispatch()

  return (
    <S.StartWrapper>
        <img src={Img} alt="Logo" />
        <S.StartButton text="Start" onClick={() => dispatch(on())}></S.StartButton>
    </S.StartWrapper>
  )
}

export default StartPage
