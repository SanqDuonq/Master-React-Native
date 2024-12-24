import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const WithState = () => {
  const [count,setCount] = useState(0);
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button
        title='Increase'
        onPress={() => setCount(count+1)}
      />
    </View>
  )
}

export default WithState