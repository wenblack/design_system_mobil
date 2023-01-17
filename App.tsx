import React from 'react'
//imports
import {
	useFonts,
	Inter_400Regular,
	Inter_800ExtraBold,
	Inter_700Bold,
	Inter_900Black
} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading'
import { TextExample } from './src/screens/TextExample'
import { FormExample } from './src/screens/FormExample'
import { StatusBar } from 'react-native'
//main function
export default function App() {
	let [fontsLoaded] = useFonts({
		Inter_400Regular, //normal
		Inter_800ExtraBold, //title
		Inter_700Bold, //subtitle
		Inter_900Black //exta
	})
	if (!fontsLoaded) {
		return <Loading></Loading>
	}
	return (
		<>
			<FormExample
				fontButton='Inter_700Bold'
				fontSubtitle='Inter_700Bold'
				fontTitle='Inter_800ExtraBold'
				fontInput='Inter_400Regular'
			/>
			<StatusBar barStyle={'dark-content'}></StatusBar>
		</>
	)
}
