import AgeComponent from "@/components/age";
import NameComponent from "@/components/name";
import SubjectComponent from "@/components/subject";
import XComponent from "@/components/x";
import { Text, View } from "react-native";
import "../global.css"
import TextComponent from "@/components/TextComponent";
import ViewComponent from "@/components/ViewComponent";
import ButtonComponent from "@/components/ButtonComponent";
const Index = () => {
    return (
        <View>
            {/* <NameComponent/>
            <AgeComponent/>
            <XComponent/>
            <SubjectComponent/> */}
            <TextComponent/>
            <ViewComponent/>
            <ButtonComponent/>
        </View>
    )
}

export default Index;