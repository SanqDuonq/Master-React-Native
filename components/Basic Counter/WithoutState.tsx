import { View, Text, Button } from 'react-native'
import React from 'react'

const WithoutState = () => {
    let counter = 0;
    return (
        <View>
            <Text>Count: {counter}</Text>
            <Button
                title='Increase'
                onPress={() => counter++}
            />
        </View>
    )
}

export default WithoutState;