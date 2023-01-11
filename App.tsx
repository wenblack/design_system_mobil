//imports
import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_800ExtraBold,
  Inter_400Regular,
  Inter_700Bold,
  Inter_300Light,
} from '@expo-google-fonts/inter';
import { TextExample } from './src/screens/TextExample';
import { FormExample } from './src/screens/FormExample';

//main function
export default () => {
  //fonts
  let [fontsLoaded] = useFonts({
    Inter_800ExtraBold,
    Inter_400Regular,
    Inter_700Bold,
    Inter_300Light
  });

  //load fonts
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <FormExample></FormExample>
    );
  }
};