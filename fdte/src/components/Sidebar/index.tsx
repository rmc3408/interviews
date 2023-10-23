import React from 'react'
import iconPlus from 'assets/images/plus.png'
import Button from 'components/Button'
import { useAppSelector, useAppDispatch } from 'store/store'
import { save, remove } from 'store/slices/pokemon-list'
import * as S from './styled'
import { newPokemon } from 'data/mock'


const Sidebar = () => {
  const dispatch = useAppDispatch()
  const pokemons = useAppSelector((state) => state.pokemon.pokeballs)

  const SideImagesContent = pokemons.map((pokemon, idx) => {
    let imageContent: any = '?'
    if(pokemon) {
      imageContent = <img src={pokemon.sprites.front_default} alt='i' />
    }
    return <S.SideBarItem key={idx}>{imageContent}</S.SideBarItem>
  })

  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        {SideImagesContent}
      </S.SideBarList>

      <Button icon={iconPlus} onClick={() => dispatch(save(newPokemon))} />
      <Button icon={iconPlus} onClick={() => dispatch(remove({ name: 'chansey' }))} />
    </S.SideBarWrapper>
  )
}

export default Sidebar
