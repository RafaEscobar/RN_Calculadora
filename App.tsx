import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { styles } from './src/theme/appTheme';
import { NativeBaseProvider } from 'native-base/lib/typescript/core';
import { NativeBaseConfigProvider } from 'native-base/lib/typescript/core/NativeBaseContext';

export const App = () => {
  return (
    //! 1) Encajonamos todo en el SafeArea
    <SafeAreaView style={styles.main_backgroud}>
      {/* //! 2) Establecemos el StatusBar para estilizar la app visualmente*/}
      <StatusBar 
      //* 2.1) Establecemos el fondo negro al StatusBar
        backgroundColor='black'
      />
      {/* //! 3) Mandamos a llamar a nuestra Screen principal  */}
      <CalculadoraScreen />
    </SafeAreaView>
  )
}

