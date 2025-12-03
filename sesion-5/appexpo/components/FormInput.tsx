import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";

interface IFormInput {
    label: string,
    placeholder?: string,
    onChange?: any
}

export default function FormInput({ label, placeholder, onChange }: IFormInput) {
    const [text, setText] = useState("")

    const handleText = (elTexto: string) => {
        setText(elTexto)
    }

    useEffect(() => {
        // Enviamos el valor al evento onChange en el componente padre
        if (onChange) {
            onChange(text)
        }
    }, [text])

    return (<View>
        <Text>{label}</Text>
        <TextInput placeholder={placeholder} onChangeText={handleText} />
    </View>)
}
