import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export function Loading() {
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<ActivityIndicator
				color={'darkorange'}
				size={'large'}
			/>
		</View>
	)
}
