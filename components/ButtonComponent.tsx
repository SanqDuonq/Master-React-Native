import { Button, Pressable, Text, View } from "react-native"


const ButtonComponent = () => {
    return (
        // <View>
        //     <Button 
        //         title="Submit"
        //         color='teal'
        //         onPress={() => alert('Press me!')}
        //     />
        // </View>

        <>
            <View className="space-y-[20px]">
                <Pressable
                    onPress={() => console.log('Pressed')}
                    className="w-full bg-blue-500"
                >
                    <Text className="text-white text-center font-medium py-2">Press me </Text>
                </Pressable>

                <Pressable
                    onPressIn={() => console.log('Pressed')}
                    className="w-full bg-red-500"
                >
                    <Text className="text-white text-center font-medium py-2">Press me </Text>
                </Pressable>

                <Pressable
                    onPressOut={() => console.log('Pressed')}
                    className="w-full bg-yellow-500"
                >
                    <Text className="text-white text-center font-medium py-2">Press me </Text>
                </Pressable>

                <Pressable
                    onLongPress={() => console.log('Pressed')}
                    className="w-full bg-green-500"
                >
                    <Text className="text-white text-center font-medium py-2">Press me </Text>
                </Pressable>
            </View>
        </>
    )
}

export default ButtonComponent;