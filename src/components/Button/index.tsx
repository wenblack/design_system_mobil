import React from 'react'
import { SubTitle } from '../SubTitle'
import { ButtonContainer } from './styles'

interface ButtonProps {
	type?: 'default' | 'sucess' | 'cancel'
	placeholder: string
	label: string
	fontStyle: string
}

export function Button({ type, placeholder, label, fontStyle }: ButtonProps) {
	if (type == 'default') {
		return (
			<ButtonContainer accessibilityLabel={label}>
				<SubTitle
					style={{ color: 'white', fontFamily: fontStyle }}
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
					style={{ color: 'white', fontFamily: fontStyle }}
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
					style={{ color: 'white', fontFamily: fontStyle }}
					content={placeholder}
				/>
			</ButtonContainer>
		)
	} else {
		return (
			<ButtonContainer accessibilityLabel={label}>
				<SubTitle
					style={{ color: 'white', fontFamily: fontStyle }}
					content={placeholder}
				/>
			</ButtonContainer>
		)
	}
}
