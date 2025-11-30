import CajaTexto from "@/components/cajaTexto";
import { Alert, SafeAreaView, Text, TextInput, View } from "react-native";
// Traemos los estilos
import { flexboxStyles as flex } from '@/styles/flexboxStyles'
import {  useEffect, useRef } from "react";

export default function BuscarScreen() {
    const refInput = useRef(null)
    // Cuando el componente cargue la primera vez
    const autofocus = () => {
        if(refInput.current){
            refInput.current.focus()
            refInput.current.value = "ok"
        }
    }


    return <SafeAreaView>
        <View style={flex.contenedor} onFocus={autofocus}>

            <Text>Buscar</Text>
            
            <TextInput ref={refInput} placeholder="hola" />

            <CajaTexto label="Origen" autoFocus={true} />

            <CajaTexto label="Destino" />

            <View style={flex.cols}>
                <CajaTexto style={flex.item} label="Fecha de salida" />
                <CajaTexto style={flex.item} label="Fecha de llegada" />
            </View>
        </View>
    </SafeAreaView>
}
