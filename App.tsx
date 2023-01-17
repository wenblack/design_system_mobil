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
import { StyleSheet, View } from 'react-native'
//main function
export default function App() {
	let [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_800ExtraBold,
		Inter_900Black
	})
	if (!fontsLoaded) {
		return <Loading></Loading>
	}
	return <FormExample font='Inter_400Regular'></FormExample>
}
