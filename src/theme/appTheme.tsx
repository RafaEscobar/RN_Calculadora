import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // Caja SafeAreaView
    main_backgroud: {
        flex: 1,
        backgroundColor: 'black',
        //* 1) -> Padding de 15 proporcionado por el SafeArea */
        padding: 15,
    },
    // Texto del resultado
    // * 2.1) -> Generamos el estilo completo del texto del resultado, (Resultado grande)
    txt_resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
    },
    // * 2.2) -> Generamos el estilo completo del texto del resultado (Resusltado pequeño)
    txt_resultadoSmall: {
        color: 'rgba(255,255,255, 0.6)',
        fontSize: 40,
        textAlign: 'right',
    },
    btn_numbers: {
        backgroundColor: '#9B9B9B',
        width:80,
        height:80,
        borderRadius: 40,
    },
    myRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    // Contenedor general de los elementos
    main_box: {
        flex: 1,
        // backgroundColor: 'aqua',
        //* 3) -> Tira hacia abajo el texto del resultado */
        justifyContent: 'flex-end'
    },

});