import CuadroTexto from "@/with-gluestack/components/cuadro-texto";
import MyAccordion from "@/with-gluestack/components/myaccordion";
import { SafeAreaView, ScrollView, Text, View } from "react-native";


export default function HelloScreen() {
    return <SafeAreaView>

        <ScrollView>

            <View>
                <Text>Saludos desde React Native. HelloScreen</Text>

                <CuadroTexto etiqueta="Nombre" instruccion="ingresa tu nombre" />
                <CuadroTexto etiqueta="Apellido" instruccion="tu apellido" />
                <CuadroTexto etiqueta="Ciudad" instruccion="¿Dónde te encuentras?" />

            </View>

            <MyAccordion />
        </ScrollView>
    </SafeAreaView>
}
