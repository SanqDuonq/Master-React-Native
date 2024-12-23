import { View, Text, FlatList } from 'react-native'
import React from 'react'
const ArrayOfObject = () => {
    const locations = [
        {
            id: 1,
            name: 'London'
        },
        {
            id: 2,
            name: 'Paris'
        },
        {
            id: 3,
            name: 'Germany'
        },
        {
            id: 4,
            name: 'USA'
        }
    ]

  return (
    <View>
      <FlatList
        data={locations}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  )
}

export default ArrayOfObject