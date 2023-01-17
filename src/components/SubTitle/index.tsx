import React from 'react'
import { ColorValue, StyleProp, TextStyle } from 'react-native'
import { H2 } from './styles'

interface SubTitleProps {
	content: string
	fontSubtitle: string
	color?: ColorValue
}

export function SubTitle({ content, fontSubtitle, color }: SubTitleProps) {
	return <H2
		style={{
			fontFamily: fontSubtitle,
			color: color
		}}>{content}</H2>
}
