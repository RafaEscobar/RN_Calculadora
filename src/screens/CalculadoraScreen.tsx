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
          <BtnGrlComponent texto='C'  color='#0000C6'/>
          <BtnGrlComponent texto='+/-' color='#0000C6'/>
          <BtnGrlComponent texto='%' color='#0000C6'/>
          <BtnGrlComponent texto='/' color='#ffff39'/>
      </View>
      {/* //! 12) Generamos todas las filas restantes */}
      <View style={styles.myRow}>
          <BtnGrlComponent texto='7' />
          <BtnGrlComponent texto='8'/>
          <BtnGrlComponent texto='9'/>
          <BtnGrlComponent texto='X' color='#ffff39'/>
      </View>
      <View style={styles.myRow}>
          <BtnGrlComponent texto='4' />
          <BtnGrlComponent texto='5'/>
          <BtnGrlComponent texto='6'/>
          <BtnGrlComponent texto='-' color='#ffff39'/>
      </View>
      <View style={styles.myRow}>
          <BtnGrlComponent texto='1' />
          <BtnGrlComponent texto='2'/>
          <BtnGrlComponent texto='3'/>
          <BtnGrlComponent texto='+' color='#ffff39'/>
      </View>
      <View style={styles.myRow}>
          <BtnGrlComponent texto='0' ancho={true}/>
          <BtnGrlComponent texto='.'/>
          <BtnGrlComponent texto='=' color='#ffff39'/>
      </View>
      
    </NativeBaseProvider>
  )
}
