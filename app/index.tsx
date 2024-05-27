import {Text, View} from "react-native";
import CounterButton from "@/components/custom/CounterButton";
import LongText from "@/components/custom/LongText";
import StaticImage from "@/components/custom/StaticImage";
import NetworkImage from "@/components/custom/NetworkImage";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Hello world!</Text>
            <Text>Below is a counting button with useState and useEffect!</Text>
            <CounterButton/>
            <LongText/>
            <Text>{"\n"}{"\n"}</Text>
            <Text>I imported this image from a static file.{"\n"}
                  Its touchable on Short and Long Press events!</Text>
            <StaticImage/>
            <Text>{"\n"}{"\n"}</Text>
            <Text>I imported this image from the network!</Text>
            <NetworkImage/>
        </View>
    )
        ;
}
