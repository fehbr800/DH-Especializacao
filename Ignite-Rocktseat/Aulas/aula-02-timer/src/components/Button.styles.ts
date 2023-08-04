import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secundary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secundary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  margin: 8px;
  border-radius: 8px;
  border: none;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  /*${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }}*/
`
