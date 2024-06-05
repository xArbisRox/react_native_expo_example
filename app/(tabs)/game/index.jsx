import { ScrollView, Text, View } from "react-native";
import CustomPieChart from "@/components/custom/game/charts/examples/CustomPieChart";
import CustomLineChart from "@/components/custom/game/charts/examples/CustomLineChart";
import CustomPyramidChart from "@/components/custom/game/charts/examples/CustomPyramidChart";
import CustomBarChart from "@/components/custom/game/charts/examples/CustomBarChart";
import baseStyles from "@/components/custom/Style";
import Background from "@/components/custom/Gradient";
import CustomStackedBarChart from "../../../components/custom/game/charts/examples/CustomStackedBarChart";
import CustomSegmentedButton from "../../../components/custom/game/CustomSegmentedButton";
import SelectAndChartView from "@/components/custom/game/SelectAndChartView";

const GamePage = () => {
  return (
    <View style={baseStyles.container}>
      <Background />
      <SelectAndChartView />
      {/*
      <CustomSegmentedButton />
      <ScrollView contentContainerStyle={{ alignItems: "center", gap: 35 }}>
        <CustomBarChart />
        <CustomStackedBarChart />
        <CustomLineChart />
        <CustomPieChart />
        <CustomPyramidChart />
      </ScrollView>
*/}
    </View>
  );
};

export default GamePage;
