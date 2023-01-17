import React from 'react'
import { ColorValue, StyleProp, TextStyle } from 'react-native'
import { H1 } from './styles'

interface TitleProps {
	content: string
	color?: ColorValue
	fontTitle: string
}

export function Title({ content, color, fontTitle }: TitleProps) {
	return <H1
		style={{
			fontFamily: fontTitle,
			color: color
		}}>
		{content}
	</H1>
}
