import React, { MouseEventHandler } from 'react'

import * as S from './styled'

interface ButtonProps {
  text?: string
  icon?: any
  onClick?: any
  onlyIcon?: boolean
}

const Button = ({ text, icon, onClick, onlyIcon, ...props }: ButtonProps) => (
  <S.ButtonWrapper className={`${icon ? 'icon': ''}`} onClick={onClick} {...props}>
    {icon ? <S.Icon src={icon} /> : <S.Text>{text}</S.Text>}
  </S.ButtonWrapper>
)

export default Button
