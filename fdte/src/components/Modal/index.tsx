import React from 'react'
import * as S from './styled'
import img from 'assets/images/pokeball.png'
import { useAppDispatch } from 'store/store'
import { save } from 'store/slices/pokemon-list'
import { PokeBall } from 'data/types'

type ModalProps = {
  openModal: boolean
  setOpenModal: Function
  pokemon: PokeBall | undefined
}

const ModalCard = ({ openModal, setOpenModal, pokemon }: ModalProps) => {
  const dispatch = useAppDispatch()
  
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleModalSavePokemon = () => {
    handleCloseModal()
    if(pokemon) dispatch(save(pokemon))
  }

  return (
    <S.OutsideOverlay $open={openModal} >
      <S.Modal>
          <S.CloseButton onClick={() => handleCloseModal()}>&times;</S.CloseButton>

          <h1>MODAL CARD</h1>
          <p> If the modal shrinks below the breakpoint then the modal goes full screen</p>
          <br /><br /><br /><br /><br />
          
          <S.PokeBallContent onClick={() => handleModalSavePokemon()}>
            <S.PokeBallImage src={`${img}`} alt='pokeball'/>
          </S.PokeBallContent>
      </S.Modal>
    </S.OutsideOverlay>
  )
}

export default ModalCard
