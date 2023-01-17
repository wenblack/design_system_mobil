import React from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { H2 } from './styles'

interface SubTitleProps {
	content: string
	style?: StyleProp<TextStyle>
}

export function SubTitle({ content, style }: SubTitleProps) {
	return <H2 style={style}>{content}</H2>
}
