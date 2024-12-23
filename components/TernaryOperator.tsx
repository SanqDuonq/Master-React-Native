import { View, Text, FlatList } from 'react-native'
import React from 'react'

const TernaryOperator = () => {
  const groceries = ['milk','eggs','bread','cheese']
  return (
    <View>
      <Text>Cart: </Text>
      {
        groceries.length > 0 && (
          <Text>You have {groceries.length} items in your cart</Text>
        )
      }
      <FlatList
        data={groceries}
        renderItem={({item}) => <Text>{item}</Text>}
      />
    </View>
  )
}

export default TernaryOperator;