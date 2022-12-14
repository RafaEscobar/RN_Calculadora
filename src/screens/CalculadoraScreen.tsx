import { Button, NativeBaseProvider } from 'native-base'
import React from 'react'
import { Text, View } from 'react-native'
import { BtnGrlComponent } from '../components/BtnGrlComponent'
import { styles } from '../theme/appTheme'

//! 4) Creamos nuestra Screen principal
export const CalculadoraScreen = () => {
  return (
    //! 5) Abrazamos todo el el -NativeBaseProvider- ya que usaremos -NativeBase-
    <NativeBaseProvider>
      {/* //! 6) Creamoos una View que contendra las etiquetas de resultados */}
      <View style={styles.main_box}>
        {/* //* 6.1) Resuktado pequeño */}
          <Text style={styles.txt_resultadoSmall}> 000000 </Text>
          {/* //* 6.2) Resultado grande */}
          <Text style={styles.txt_resultado}>15,000.00</Text>
      </View>
      {/* //! 7) Creamos la caja de los btns */}
      <View style={styles.myRow}>
        {/* //! 11) Mandamos a llamar al componente de BTN cada vez que requiramos de un btn */}
          <BtnGrlComponent texto='C'/>
          <BtnGrlComponent texto='+/-'/>
          <BtnGrlComponent texto='%'/>
          <BtnGrlComponent texto='/'/>
      </View>
    </NativeBaseProvider>
  )
}
