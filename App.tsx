import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { styles } from './src/theme/appTheme';
import { NativeBaseProvider } from 'native-base/lib/typescript/core';
import { NativeBaseConfigProvider } from 'native-base/lib/typescript/core/NativeBaseContext';

export const App = () => {
  return (
    <SafeAreaView style={styles.main_backgroud}>
      <StatusBar 
        backgroundColor='black'
      />
      <CalculadoraScreen />
    </SafeAreaView>
  )
}

