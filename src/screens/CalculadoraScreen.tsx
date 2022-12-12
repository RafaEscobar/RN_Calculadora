import { Button, NativeBaseProvider } from 'native-base'
import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const CalculadoraScreen = () => {
  return (
    <NativeBaseProvider>
      <View style={styles.main_box}>
          <Text style={styles.txt_resultadoSmall}> 000000 </Text>
          <Text style={styles.txt_resultado}>15,000.00</Text>
      </View>
      <View style={styles.myRow}>
        <Button style={styles.btn_numbers}>1</Button>
        <Button style={styles.btn_numbers}>1</Button>
        <Button style={styles.btn_numbers}>1</Button>
        <Button style={styles.btn_numbers}>1</Button>
      </View>
    </NativeBaseProvider>
  )
}
