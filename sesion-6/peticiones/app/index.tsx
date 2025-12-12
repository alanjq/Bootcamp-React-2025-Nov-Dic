import ClimaCiudad from "@/components/ClimaCiudad";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Index() {
  const [texto, setTexto] = useState('Cancún')

  // Para el proyecto
  const botones = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 'C', '=']

  const handleButtonClic = (etiqueta : string) => {
    switch (etiqueta) {
      case "=":
      case "C":
      break;
    }
  }

  console.log('Hola')

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Clima de tu ciudad</Text>

      <Text>Ciudad:</Text>

      <TextInput onChangeText={setTexto} style={{ borderWidth: 1, width: 300 }} />

      <ClimaCiudad nombre={texto} />

      <View>
        {botones.map((etiqueta, index) => <Button key={index} title={etiqueta} onPress={() => handleButtonClic(etiqueta)} />)}
      </View>

      {/* <ClimaCiudad nombre="Monterrey" /> */}

      </View>
  );
}
