import { Image, Text, View } from "react-native"
import Logo from '../assets/images/cat2.jpg';

const ImageComponent = () => {
    return (
        <View>
            <Text>Let's explore image!</Text>
            <Image 
                source={Logo}
                
            />
        </View>
    )
}

export default ImageComponent;