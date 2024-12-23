import { View, Text } from 'react-native'
import React from 'react'
import ChildComponent from './ChildComponent'



const ParentComponent = () => {
  return (
    <View>
      <ChildComponent name='Sanq' age={20} hobbies={['badminton, ' ,'soccer']}/>
    </View>
  )
}

export default ParentComponent