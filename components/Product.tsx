import { View, Text, Image } from 'react-native'
import React from 'react'

interface IProduct {
    name: string,
    image: any,
    price: number,
    description: string,
    isFeatured: boolean
}


const Product = ({name,image,price,description,isFeatured}: IProduct) => {
  return (
    <View>
      <Image
        source={image}
      />
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Text>{description}</Text>
      <Text>{isFeatured}</Text>
    </View>
  )
}

export default Product