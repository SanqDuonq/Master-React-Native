import { View, Text, Image, processColor, Button } from 'react-native'
import React from 'react'
import Car from '../../assets/images/mazda3.jpeg'
const CarComponent = () => {
    const price = 200000;
    const width = 500;
    const height = 200;
    const carRating = 3.5;
    const carName = 'Mazda3';
    const carDescription = 'Here is random car description'



  return (
    <View>
        <Image 
            source={Car}
            style ={{width: width, height: height}}
        />
      <Text>{carName}</Text>
      <Text>{carRating}</Text>
      <Text>{carDescription}</Text>
      <Text>{price}</Text>
      <Button
        title='Add to cart'
      />
    </View>
  )
}

export default CarComponent