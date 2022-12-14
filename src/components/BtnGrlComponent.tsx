import { Button } from 'native-base'
import React from 'react'
import { styles } from '../theme/appTheme'

//! 8) Creamos la interfaz que rigue la solicitud y el tipo de dato de los parametros
interface Props {
    texto: String,
}

//! 9) Creamos el componente para los btns y Desestructuramos los parametros que usaremos 
export const BtnGrlComponent = ({ texto }:Props) => {
  return (
    //! 10) Creamos el btn
    <Button style={styles.btn_numbers}>{texto}</Button>
  )
}

