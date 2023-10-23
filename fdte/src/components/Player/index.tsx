import React from 'react'
import ashFront from 'assets/images/ashFront.png'
import * as S from './styled'
import { randomPokemonNumber } from 'utils/helper'


type PlayerProps = {
  setPokemonId: Function
  setOpenModal: Function
}

function Player({ setPokemonId, setOpenModal }: PlayerProps) {
  const handleGetId = () => {
    const id = randomPokemonNumber(1, 807)
    setPokemonId({ id: id })
    setOpenModal(true)
  }

  return (
    <S.PlayerWrapper onClick={() => handleGetId()}>
      <img src={`${ashFront}`} alt='ashfront' />
    </S.PlayerWrapper>
  )
}

export default Player
