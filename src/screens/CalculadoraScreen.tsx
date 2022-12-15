import { Button, NativeBaseProvider } from 'native-base'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { BtnGrlComponent } from '../components/BtnGrlComponent'
import { styles } from '../theme/appTheme'

//! 4) Creamos nuestra Screen principal
export const CalculadoraScreen = () => {

  const [numero, setNumero] = useState('0');
  const [resultado, setResultado] = useState('0');

  // Limpiar-resetaer el valor de -numero-
  const btn_clear = () => {
    setNumero('0');
  }

  const generarNum = (numeroTexto: string) => {
    setNumero(numero + numeroTexto);
  }

  const generarNum2 = (simboloText: string) =>{
    setResultado(simboloText);
  }

  return (
    //! 5) Abrazamos todo el el -NativeBaseProvider- ya que usaremos -NativeBase-
    <NativeBaseProvider>
      {/* //! 6) Creamoos una View que contendra las etiquetas de resultados */}
      <View style={styles.main_box}>
        {/* //* 6.1) Resuktado pequeño */}
          <Text style={styles.txt_resultadoSmall}>{resultado}</Text>
          {/* //* 6.2) Resultado grande */}
          <Text style={styles.txt_resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>
      </View>
      {/* //! 7) Creamos la caja de los btns */}
      <View style={styles.myRow}>
        {/* //! 11) Mandamos a llamar al componente de BTN cada vez que requiramos de un btn */}
          <BtnGrlComponent texto='C'  color='#0000C6' action={btn_clear}/>
          <BtnGrlComponent texto='+/-' color='#0000C6' action={generarNum2}/>
          <BtnGrlComponent texto='%' color='#0000C6' action={generarNum2}/>
          <BtnGrlComponent texto='/' color='#ffff39' action={generarNum2}/>
      </View>
      {/* //! 12) Generamos todas las filas restantes */}
      <View style={styles.myRow}>
          <BtnGrlComponent texto='7'  action={generarNum}/>
          <BtnGrlComponent texto='8' action={generarNum}/>
          <BtnGrlComponent texto='9' action={generarNum}/>
          <BtnGrlComponent texto='X' color='#ffff39' action={generarNum2}/>
      </View>
      <View style={styles.myRow}>
          <BtnGrlComponent texto='4'  action={generarNum}/>
          <BtnGrlComponent texto='5' action={generarNum}/>
          <BtnGrlComponent texto='6' action={generarNum}/>
          <BtnGrlComponent texto='-' color='#ffff39' action={generarNum2}/>
      </View>
      <View style={styles.myRow}>
          <BtnGrlComponent texto='1'  action={generarNum}/>
          <BtnGrlComponent texto='2' action={generarNum}/>
          <BtnGrlComponent texto='3' action={generarNum}/>
          <BtnGrlComponent texto='+' color='#ffff39' action={generarNum2}/>
      </View>
      <View style={styles.myRow}>
          <BtnGrlComponent texto='0' ancho={true} action={generarNum}/>
          <BtnGrlComponent texto='.' action={generarNum}/>
          <BtnGrlComponent texto='=' color='#ffff39' action={generarNum2}/>
      </View>
    </NativeBaseProvider>
  )
}