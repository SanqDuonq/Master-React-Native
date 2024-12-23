import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import React from 'react';
import Logo from '../../assets/images/window.png';
import Cat from '../../assets/images/cat2.jpg';

interface IProduct {
    id: number;
    name: string;
    img: any;
    price: number;
}

const HugeComponent = () => {
    const product: IProduct[] = [
        { id: 1, name: 'Window', img: Logo, price: 20000 },
        { id: 2, name: 'Orange Cat', img: Cat, price: 500 },
        { id: 3, name: 'Orange Cat', img: Cat, price: 500 },
        { id: 4, name: 'Orange Cat', img: Cat, price: 500 },
        { id: 5, name: 'Orange Cat', img: Cat, price: 500 },
        { id: 6, name: 'Orange Cat', img: Cat, price: 500 },
        { id: 7, name: 'Orange Cat', img: Cat, price: 500 },
        { id: 8, name: 'Orange Cat', img: Cat, price: 500 },
    ];

    const renderItem = ({ item }: { item: IProduct }) => {
        return (
            <View style={styles.item}>
                <Image source={item.img} style={styles.image} />
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={product}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator= {true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    item: {
        marginBottom: 10,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 5,
    },
});

export default HugeComponent;
