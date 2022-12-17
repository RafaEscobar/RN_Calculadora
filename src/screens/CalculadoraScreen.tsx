import { Button, NativeBaseProvider } from 'native-base'
import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BtnGrlComponent } from '../components/BtnGrlComponent'
import { styles } from '../theme/appTheme'
import { useCalculadora } from '../hooks/useCalculadora'


//! 4) Creamos nuestra Screen principal
export const CalculadoraScreen = () => {

  const { resultado, numero, btn_clear, btnDivision, btnMultiplicacion, btnSuma, btnResta, generarNum, positiveNegative, delDigito, calculo } = useCalculadora();

  return (
    //! 5) Abrazamos todo el el -NativeBaseProvider- ya que usaremos -NativeBase-
    <NativeBaseProvider>
      {/* //! 6) Creamoos una View que contendra las etiquetas de resultados */}
      <View style={styles.main_box}>
        {/* //* 6.1) Resuktado pequeño */}
        {
          (resultado !== '0') && (
            <Text style={styles.txt_resultadoSmall} numberOfLines={1} adjustsFontSizeToFit>{resultado}</Text>
          )
        }
          {/* //* 6.2) Resultado grande */}
          <Text style={styles.txt_resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>
      </View>
      {/* //! 7) Creamos la caja de los btns */}
      <View style={styles.myRow}>
        {/* //! 11) Mandamos a llamar al componente de BTN cada vez que requiramos de un btn */}
          <BtnGrlComponent texto='C'  color='#0000C6' action={btn_clear}/>
          <BtnGrlComponent texto='+/-' color='#0000C6' action={positiveNegative}/>
          <BtnGrlComponent texto='del' color='#0000C6' action={delDigito}/>
          <BtnGrlComponent texto='/' color='#00ffff' action={btnDivision}/>
      </View>
      {/* //! 12) Generamos todas las filas restantes */}
      <View style={styles.myRow}>
          <BtnGrlComponent texto='7'  action={generarNum}/>
          <BtnGrlComponent texto='8' action={generarNum}/>
          <BtnGrlComponent texto='9' action={generarNum}/>
          <BtnGrlComponent texto='X' color='#00ffff' action={btnMultiplicacion}/>
      </View>
      <View style={styles.myRow}>
          <BtnGrlComponent texto='4'  action={generarNum}/>
          <BtnGrlComponent texto='5' action={generarNum}/>
          <BtnGrlComponent texto='6' action={generarNum}/>
          <BtnGrlComponent texto='-' color='#00ffff' action={btnResta}/>
      </View>
      <View style={styles.myRow}>
          <BtnGrlComponent texto='1'  action={generarNum}/>
          <BtnGrlComponent texto='2' action={generarNum}/>
          <BtnGrlComponent texto='3' action={generarNum}/>
          <BtnGrlComponent texto='+' color='#00ffff' action={btnSuma}/>
      </View>
      <View style={styles.myRow}>
          <BtnGrlComponent texto='0' ancho={true} action={generarNum}/>
          <BtnGrlComponent texto='.' action={generarNum}/>
          <BtnGrlComponent texto='=' color='#00ffff' action={calculo}/>
      </View>
    </NativeBaseProvider>
  )
}