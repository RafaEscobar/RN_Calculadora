import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // Caja SafeAreaView
    main_backgroud: {
        flex: 1,
        backgroundColor: 'black',
        padding: 15,
    },
    // Para texto del resultado grande
    txt_resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
    },
    // Para texto del resultado pequeño
    txt_resultadoSmall: {
        color: 'rgba(255,255,255, 0.6)',
        fontSize: 40,
        textAlign: 'right',
    },
    // Para botones generales... (Para casi todos los btns)
    btn_numbers: {
        backgroundColor: '#9B9B9B',
        width:80,
        height:80,
        borderRadius: 40,
    },
    // Para contenedor inmediato de los btns
    myRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    // Contenedor general
    main_box: {
        flex: 1,
        justifyContent: 'flex-end'
    },

});