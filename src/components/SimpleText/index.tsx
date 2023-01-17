import React from 'react'

import { Text } from './styles'

interface SimpleTextProps {
	content: string
	fontstyle: string
}

export function SimpleText({ content, fontstyle }: SimpleTextProps) {
	return (
		<Text
			style={{
				fontFamily: fontstyle
			}}
		>
			{content}
		</Text>
	)
}
