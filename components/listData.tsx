import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ListData = () => {
    const fruits = ['apple', 'bananas', 'cherry']
  return (
    <View>
        <FlatList
            data={fruits}
            renderItem={(element) => {
                return <Text>{element.item}</Text>
            }}
        />
    </View>
  )
}

export default ListData