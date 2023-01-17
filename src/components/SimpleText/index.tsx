import React from 'react'
import { ColorValue } from 'react-native'

import { Text } from './styles'

interface SimpleTextProps {
	content: string
	textFont: string
	color?: ColorValue
}

export function SimpleText({ content, textFont, color }: SimpleTextProps) {
	return (
		<Text
			style={{
				fontFamily: textFont,
				color: color
			}}
		>
			{content}
		</Text>
	)
}
