import React from 'react'
import { SubTitle } from '../SubTitle'
import { ButtonContainer } from './styles'

interface ButtonProps {
  type?: 'default' | 'sucess' | 'cancel'
  placeholder: string
  label: string
  fontButton: string
}

export function Button({ type, placeholder, label, fontButton }: ButtonProps) {
  if (type == 'default') {
    return (
      <ButtonContainer accessibilityLabel={label}>
        <SubTitle
          color='#fff'
          fontSubtitle={fontButton}
          content={placeholder}
        />
      </ButtonContainer>
    )
  }
  if (type == 'sucess') {
    return (
      <ButtonContainer
        accessibilityLabel={label}
        style={{ backgroundColor: 'green' }}
      >
        <SubTitle
          color='#fff'
          fontSubtitle={fontButton}
          content={placeholder}
        />
      </ButtonContainer>
    )
  }
  if (type == 'cancel') {
    return (
      <ButtonContainer
        accessibilityLabel={label}
        style={{ backgroundColor: 'red' }}
      >
        <SubTitle
          color='#fff'
          fontSubtitle={fontButton}
          content={placeholder}
        />
      </ButtonContainer>
    )
  } else {
    return (
      <ButtonContainer accessibilityLabel={label}>
        <SubTitle
          color='#fff'
          fontSubtitle={fontButton}
          content={placeholder}
        />
      </ButtonContainer>
    )
  }
}
