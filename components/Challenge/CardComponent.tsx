import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import Logo from '../../assets/images/cat2.jpg'
const CardComponent = () => {
  return (
    <View className='flex flex-col items-center space-y-[10px]'>
        <Image 
            source={Logo}
            className='rounded-full border border-gray-400'
            style ={{width: 100, height: 100}}
        />
      <Text>Orange Cat</Text>
      <Text>I love eat, sleep</Text>
      <Button
        onPress={() => console.log('Pressed')}
        title='Eat'
      />
    </View>
  )
}

export default CardComponent