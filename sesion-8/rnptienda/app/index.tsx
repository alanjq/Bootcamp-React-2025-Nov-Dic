import ProductCard from "@/components/ProductCard";
import { CartContext } from "@/context/cartContext";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";


export default function Index() {
  const URL_API = "https://fakestoreapi.com/products"
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch(URL_API)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        console.log('datos', data)
      })
      .catch((error) => {
        setProducts([])
        console.log("Error al consultar productos", error)
      })
  }, [])


  return (
    <CartContext.Provider value={{ cart, setCart }}>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Store</Text>

        <ScrollView>
          {products.map((producto) =>
            <ProductCard key={producto.id} {...producto} />
          )}
        </ScrollView>
      </View>
    </CartContext.Provider>
  );
}
// // <Text key={producto.id}>{producto.title}</Text>
