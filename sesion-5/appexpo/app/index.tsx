import FormInput from "@/components/FormInput";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Index() {
  const [veces, setVeces] = useState(0)
  
  const handleButtonClick = () => {
    console.log('Boton se presionó', veces, 'veces')
    setVeces(veces+1)
  }

  const handleTextChange = (valor: string) => {
    console.log('el valor nuevo del input es:', valor)
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit ok screen.</Text>
      <Button title={`Has hecho clic ${veces} veces`} onPress={handleButtonClick}></Button>
      <FormInput label=""  />
      <FormInput label="Nombre" placeholder="Cualquier valor" onChange={handleTextChange} />
    </View>
  );
}
