import { Text, TextInput, View } from "react-native";
import { cajaTextoStyles as style } from '@/styles/cajaTextoStyles'

export default function CajaTexto({ label, defaultValue, autoFocus=false }) {
    return (
        <View style={style.contenedor}>
            <Text style={style.etiqueta}>{label}</Text>
            <TextInput style={style.texto} placeholder={label} defaultValue={defaultValue} autoFocus={autoFocus} />
        </View>
    )
}
