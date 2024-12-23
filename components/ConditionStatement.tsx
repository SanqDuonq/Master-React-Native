import { View, Text } from 'react-native'
import React from 'react'

interface Valid {
    isValid: boolean
}

const ValidPassword = () => <Text>Valid password</Text>
const InvalidPassword = () => <Text>invalid password</Text>


const Password = ({isValid}: Valid) => {
    // if (isValid) {
    //     return <ValidPassword/>
    // } else {
    //     return <InvalidPassword/>
    // }
    return isValid ? <ValidPassword/> : <InvalidPassword/>
}


const ConditionStatement = () => {
  return (
    <View>
      <Password isValid={false}/>
    </View>
  )
}

export default ConditionStatement