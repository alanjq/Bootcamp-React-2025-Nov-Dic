import { CartContext } from '@/context/cartContext';
import { Link, Stack, useNavigation } from 'expo-router';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

interface IProductCard {
    id: number,
    title: string
    category?: string,
    description?: string,
    image?: string,
    price?: number,
    rating?: {
        count?: number,
        rate?: number
    },
}

const ProductCard = (props: IProductCard) => {
    const navigation = useNavigation()
    const context = React.useContext(CartContext)
    console.log(context)

    const addCart = () => {
        // Guardarlo y pasarlo a la siguiente pàgina
        localStorage.setItem('id', props.id)
        context.setCart(props)
        navigation.navigate("cart")
    }

    return (
        <Card style={style.card}>
            <Card.Title title={props.category} subtitle={`$ ${props.price}`} left={LeftContent} />
            <Card.Content>
                <Text variant="titleLarge">{props.title}</Text>
                <Text variant="bodyMedium">{props.description}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: props.image }} />
            <Card.Actions>
                {/* <Button>Cancel</Button> */}
                <Text>{props.rating.rate} stars</Text>
                <Button onPress={()=>addCart(props.id)}>Agregar al carrito</Button>
            </Card.Actions>
        </Card>
    );
}

const style = StyleSheet.create({
    card: {
        marginVertical: 30,
        marginHorizontal: 10
    }
})

export default ProductCard;
