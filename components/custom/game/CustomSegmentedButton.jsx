import { useState } from "react";
import { StyleSheet } from "react-native";
import { SegmentedButtons } from "react-native-paper";

const CustomSegmentedButton = () => {
  const [chartType, setChartType] = useState("stackedBarChart");
  return (
    <SegmentedButtons
      value={chartType}
      onValueChange={setChartType}
      buttons={[
        { value: "stackedBarChart", label: "Bar", icon: "chart-bar-stacked" },
        { value: "lineChart", label: "Line", icon: "chart-line" },
        { value: "pieChart", label: "Pie", icon: "chart-pie" },
      ]}
      style={style.segmentedButton}
    ></SegmentedButtons>
  );
};

const style = StyleSheet.create({
  segmentedButton: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 20,
  },
});
export default CustomSegmentedButton;
