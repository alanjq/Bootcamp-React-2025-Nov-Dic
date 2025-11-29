import { StyleSheet, Text, View } from "react-native";

// export default nos permite importar sin utilizar llaves
export default function HelloComponent({ titulo, subtitulo }) {
    return (<View style={estilo.contenedor}>
        <Text style={estilo.titulo}>{titulo}</Text>
        <Text style={estilo.sub}>{subtitulo}</Text>
    </View>)
}


let estilo = StyleSheet.create({
    contenedor: {
        marginVertical: 8,
        padding: 10,
        backgroundColor: "#1D3D47"
    },
    titulo: {
        color: 'white',
        fontSize: 35,
    },
    sub:{
        color: 'white',
        fontSize: 18
    }
})
