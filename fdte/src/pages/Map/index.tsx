import React, { useState, useEffect } from 'react'
import Sidebar from 'components/Sidebar'
import * as S from './styled'
import { useLazyGetPokemonByIdQuery } from 'store/slices/pokemon-api'
import Player from 'components/Player'
import ModalCard from 'components/Modal'


const MapPage = () => {
  const [ openModal, setOpenModal ] = useState(false)
  const [getData, { data, error, isLoading, isError, status, isFetching }] =
    useLazyGetPokemonByIdQuery()

  return (
    <S.MapWrapper>
      <Sidebar />
      <Player setPokemonId={getData} setOpenModal={setOpenModal} />
      <ModalCard openModal={openModal} setOpenModal={setOpenModal} pokemon={data} />
      <h1>3 - display data in modal</h1>
      <h1>4 - display types in Portugues</h1>
      <h1>5 - display data image in Side Bar</h1>
      <h1>6 - Limite Fetch for 6 saved pokemon</h1>
      <h1>7 - Opening side pokemon, change name</h1>
      <h1>8 - Plus button, new form with validation</h1>
      <h1>9 - Maximo 2 types to choose</h1>
      <h1>10 - Allow create or capture if spot on list avaliable</h1>
    </S.MapWrapper>
  )
}

export default MapPage
