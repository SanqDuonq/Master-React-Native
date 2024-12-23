import AgeComponent from "@/components/age";
import NameComponent from "@/components/name";
import SubjectComponent from "@/components/subject";
import XComponent from "@/components/x";
import { Text, View } from "react-native";
import "../global.css"
const Index = () => {
    return (
        <View>
            <NameComponent/>
            <AgeComponent/>
            <XComponent/>
            <SubjectComponent/>
        </View>
    )
}

export default Index;