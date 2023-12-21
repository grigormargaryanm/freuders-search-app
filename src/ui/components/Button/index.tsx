import { FC } from 'react'
import { ButtonStyle } from './styles'

type ButtonProps = {
  text: string
  type: 'submit' | 'button'
  onClick?: () => void
}
const Button: FC<ButtonProps> = ({ text, type, onClick }) => {
  return (
    <ButtonStyle type={type} onClick={onClick}>
      {text}
    </ButtonStyle>
  )
}

export default Button
