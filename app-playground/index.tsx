import { ScrollView, Text, View } from "react-native";
import CounterButton from "@/components/custom/CounterButton";
import LongText from "@/components/custom/LongText";
import StaticImage from "@/components/custom/StaticImage";
import NetworkImage from "@/components/custom/NetworkImage";
import LineBreak from "@/components/custom/LineBreak";
import { PaperProvider } from "react-native-paper";
import MyBottomNavigation from "@/components/custom/MyBottomNavigation";

export default function Index() {
  return (
    <PaperProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScrollView>
          <MyBottomNavigation style={{ top: "80%" }} />
          <Text>Hello world!!!! :)</Text>
          <LineBreak />
          <Text>Below is a counting button with useState and useEffect!</Text>
          <CounterButton />
          <LineBreak />
          <LongText />
          <LineBreak />
          <Text>
            I imported this image from a static file.{"\n"}
            Its touchable on Short and Long Press events!
          </Text>
          <StaticImage />
          <LineBreak />
          <Text>I imported this image from the network!</Text>
          <NetworkImage />
        </ScrollView>
      </View>
    </PaperProvider>
  );
}
