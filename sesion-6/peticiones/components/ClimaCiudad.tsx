import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

interface IClimaCiudad {
    nombre: string
}

export default function ClimaCiudad({ nombre }: IClimaCiudad) {
    const [error, setError] = useState(true)

    const [ciudad, setCiudad] = useState(nombre)
    const [temperatura, setTemperatura] = useState(0)
    const [viento, setViento] = useState()
    const [humedad, setHumedad] = useState()
    // Mensaje que indica el clima
    const [prevision, setPrevision] = useState('')

    useEffect(() => {
        // Consultar a la API
        if (ciudad) {
            const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=d95c58501f2b55424cb26ca37c06e37a`;
            fetch(API_URL)
                .then(response => response.json())
                .then(data => {
                    let resultados = data.list[0]
                    console.log(resultados)
                    setPrevision(resultados.weather[0].description)
                    let newTemp = Math.round(resultados.main.temp / 10)
                    setTemperatura(newTemp)
                    setHumedad(resultados.main.humidity)
                    setViento(resultados.wind.speed)
                    setError(false)
                })
                .catch((error) => {
                    setError(true)
                    console.error('Falló la petición de la API de clima', error)
                })
        }
    }, [ciudad])

    useEffect(()=>{
        setCiudad(nombre)
    }, [nombre])

    if(error){
        return <View style={s.card}>
            <Text>Ingresa una ciudad válida</Text>
        </View>
    }

    return <View style={s.card}>
        <Text>Ciudad: {ciudad}</Text>
        <Text>{prevision}</Text>
        <Text>Temperatura: {temperatura} ºC</Text>
        <Text>Viento: {viento} km/h</Text>
        <Text>Humedad: {humedad}</Text>
    </View>
}

const s = StyleSheet.create({
    card: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 15,
        marginVertical: 10,
        borderColor: '#000',
        borderWidth: 1


    }
})
