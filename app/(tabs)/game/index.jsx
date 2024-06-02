import { ScrollView, Text, View } from "react-native";
import CustomPieChart from "@/components/custom/game/charts/examples/CustomPieChart";
import CustomLineChart from "@/components/custom/game/charts/examples/CustomLineChart";
import CustomPyramidChart from "@/components/custom/game/charts/examples/CustomPyramidChart";
import CustomBarChart from "@/components/custom/game/charts/examples/CustomBarChart";
import baseStyles from "@/components/custom/Style";
import Background from "@/components/custom/Gradient";

const GamePage = () => {
  return (
    <View style={baseStyles.container}>
      <Background />
      <ScrollView contentContainerStyle={{alignItems: "center", gap: 35}}>
        <Text>Welcome to the default Game Page!</Text>
        <CustomBarChart />
        <CustomLineChart />
        <CustomPieChart />
        <CustomPyramidChart />
      </ScrollView>
    </View>
  );
};

export default GamePage;
