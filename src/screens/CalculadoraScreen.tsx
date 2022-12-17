import { Button, NativeBaseProvider } from 'native-base'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { BtnGrlComponent } from '../components/BtnGrlComponent'
import { styles } from '../theme/appTheme'

//! 4) Creamos nuestra Screen principal
export const CalculadoraScreen = () => {

  //! 13) Crear uses States
  const [numero, setNumero] = useState('0');
  const [resultado, setResultado] = useState('0');

  //! 14) Crear metodo para limpiar-resetaer el valor de -numero-
  const btn_clear = () => {
    setNumero('0');
  }

  //! 15) Crear metodo para costruir la concatencación del numero... cada que se presione un btn numerico se agregara su valor al <Text> de numero
  const generarNum = (numeroTexto: string) => {

    // Evitar colocar mas de 1 punto (.)
    if(numero.includes('.') && numeroTexto==='.') return;

    // Si empieza con 0 o -0
    if(numero.startsWith('0') || numero.startsWith('-0')){

      // Permitir el primer punto
      if(numeroTexto==='.'){
        setNumero(numero + numeroTexto);

        // Permitir tantos 0 como se deseen despues del punto
      }else if(numeroTexto==='0' && numero.includes('.')){
        setNumero(numero + numeroTexto);

        // Reemplazar el 0 por el valor ingresado
      }else if(numeroTexto !== '0' && !numero.includes('.')){
        setNumero(numeroTexto);

        // 
      }else if(numeroTexto==='0' && !numero.includes('.')){
        setNumero(numero);
      }

    }else{
      setNumero(numero + numeroTexto);
    }
  
  }

  // ******
  const generarNum2 = (simboloText: string) =>{
    setResultado(simboloText);
  }

  //! 16) Si el valor de -numero- contiene un signo negativo, se le retirara.... de lo contrario se le colocara.
  const positiveNegative = () => {
    if(numero.includes('-')){
      setNumero(numero.replace('-', ''));
    }else if(numero!=='0'){
      setNumero('-'+numero);
    }
  }

  //! 17) Eliminar ultimo digito ingresado
  const delDigito = () => {
    let tam = numero.length;
    if(tam===1 || (tam===2 && numero.includes('-'))){
      setNumero('0');
    }else{
      setNumero(numero.slice(0, (tam-1)));
    }
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
          <BtnGrlComponent texto='+/-' color='#0000C6' action={positiveNegative}/>
          <BtnGrlComponent texto='del' color='#0000C6' action={delDigito}/>
          <BtnGrlComponent texto='/' color='#00ffff' action={generarNum2}/>
      </View>
      {/* //! 12) Generamos todas las filas restantes */}
      <View style={styles.myRow}>
          <BtnGrlComponent texto='7'  action={generarNum}/>
          <BtnGrlComponent texto='8' action={generarNum}/>
          <BtnGrlComponent texto='9' action={generarNum}/>
          <BtnGrlComponent texto='X' color='#00ffff' action={generarNum2}/>
      </View>
      <View style={styles.myRow}>
          <BtnGrlComponent texto='4'  action={generarNum}/>
          <BtnGrlComponent texto='5' action={generarNum}/>
          <BtnGrlComponent texto='6' action={generarNum}/>
          <BtnGrlComponent texto='-' color='#00ffff' action={generarNum2}/>
      </View>
      <View style={styles.myRow}>
          <BtnGrlComponent texto='1'  action={generarNum}/>
          <BtnGrlComponent texto='2' action={generarNum}/>
          <BtnGrlComponent texto='3' action={generarNum}/>
          <BtnGrlComponent texto='+' color='#00ffff' action={generarNum2}/>
      </View>
      <View style={styles.myRow}>
          <BtnGrlComponent texto='0' ancho={true} action={generarNum}/>
          <BtnGrlComponent texto='.' action={generarNum}/>
          <BtnGrlComponent texto='=' color='#00ffff' action={generarNum2}/>
      </View>
    </NativeBaseProvider>
  )
}