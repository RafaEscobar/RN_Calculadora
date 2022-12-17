import { useRef, useState } from "react";

//! 20) Creamos un conjunto de constante que representaran cada btn, este sera el tipo que le pasaremos al useRef
enum Operadores {
    suma, resta, multiplicacion, division
  }

export const useCalculadora = () => {
    //! 13) Crear uses States
    const [numero, setNumero] = useState('0');
    const [resultado, setResultado] = useState('0');
  
    //! 19) Crear useRef
    const ultimaOpe = useRef<Operadores>();
  
    //! 14) Crear metodo para limpiar-resetaer el valor de -numero-
    const btn_clear = () => {
      setNumero('0');
      setResultado('0');
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
  
    //! 21) Generamos con metodos los enlaces para cada operacion
    const btnDivision = () => {
      cambioNR();
      ultimaOpe.current = Operadores.division;
    }
    const btnMultiplicacion = () => {
      cambioNR();
      ultimaOpe.current = Operadores.multiplicacion;
    }
    const btnResta = () => {
      cambioNR();
      ultimaOpe.current = Operadores.resta;
    }
    const btnSuma = () => {
      cambioNR();
      ultimaOpe.current = Operadores.suma;
    }
  
    //! 18) Cambio de posicion, entre -numero- y -resultado-
    const cambioNR = () => {
      let tam = numero.length;
      if(numero.endsWith('.')){
        setResultado(numero.slice(0, -1));
      }else{
        setResultado(numero);
      }
      setNumero('0');
    }
  
    const calculo = () => {
  
      const numInicial = Number(numero);
      const numSecundario = Number(resultado);
  
      switch(ultimaOpe.current){
        case Operadores.suma: 
          setNumero(`${numInicial+numSecundario}`);
        break;
        case Operadores.resta: 
        if(resultado!=='0'){
            setNumero(`${numSecundario - numInicial}`);
        }else{
            setNumero(numero);
        }
        break;
        case Operadores.multiplicacion: 
        if(resultado!=='0'){
            setNumero(`${numInicial * numSecundario}`);
        }else{
            setNumero(numero);
        }
        break;
        case Operadores.division:
          if(numero!=='0' && resultado!=='0'){
            setNumero(`${numSecundario / numInicial}`);          
          }else{
            setNumero(numero);
          }
        break;
        default: 
        break;
      }
      setResultado('0');
    }

    return{
        resultado: resultado,
        numero: numero,
        btn_clear: btn_clear,
        btnDivision: btnDivision,
        btnMultiplicacion: btnMultiplicacion,
        btnResta: btnResta,
        btnSuma: btnSuma, 
        generarNum: generarNum, 
        calculo: calculo,
        positiveNegative: positiveNegative,
        delDigito: delDigito,
    }
}
