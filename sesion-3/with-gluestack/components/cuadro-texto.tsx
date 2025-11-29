import { Text, TextInput, View } from "react-native";

export default function CuadroTexto({ etiqueta, instruccion, valorInicial }) {
    return <View>
        <Text>{etiqueta}</Text>
        <TextInput placeholder={instruccion} defaultValue={valorInicial} />
    </View>
}
