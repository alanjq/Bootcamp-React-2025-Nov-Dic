import { CartContext } from "@/context/cartContext";
import { useContext, useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";

export default function CartScreen() {
    const [idProd, setIdProd] = useState({})
    const context = useContext(CartContext)


    useEffect(() => {
        setIdProd(context||{})
    }, [])

    return <View>
        <Text>Carrito de compra</Text>
        id: {idProd?.id}
        nombre: {idProd?.title}
    </View>
}
