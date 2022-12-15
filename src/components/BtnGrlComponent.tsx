import { Box, Button } from 'native-base'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

//! 8) Creamos la interfaz que rigue la solicitud y el tipo de dato de los parametros
interface Props {
    texto: string,
    color?: string,
    ancho?: boolean,
}

//! 9) Creamos el componente para los btns y Desestructuramos los parametros que usaremos 
export const BtnGrlComponent = ({ texto, color='#2D2D2D', ancho=false }:Props) => {
  return (
    //! 10) Creamos el btn dentro de <Touchable> para dar efecto de pulsado
    <TouchableOpacity>
      <Box style={{ 
        //* 10.1) Desestructuramos estilos de btn
         ...styles.btn_numbers, 
         //* 10.2) Asignamos un color de fondo en base al parametro -color-
         backgroundColor: color,
         //* 10.3) Si la propiedad ancho es -true- quiere decir que el btn en cuestion requiere de un cancho de 168... ya que debe abarcar practicamente el doble de tamaño que un btn normal.
         width: (ancho) ? 168 : 80 }}>
          <Text style={{ 
          //* 10.4) Desestructuramos los estilos del texto del btn 
             ...styles.btn_text, 
             //* 10.5) Si el atributo color es -#ffff39- colocamos la fuente de texto como negra para que pueda visualizarse adecuadamente... de lo contrario que se establezca el blanco como color de fuente para el tetxo
             color: (color==='#ffff39') ? 'black' : 'white' }}>{texto}</Text>
      </Box>
    </TouchableOpacity>
  )
}
