import { useState } from "react";
import { StyleSheet } from "react-native";
import { SegmentedButtons } from "react-native-paper";
import CustomStackedBarChart from "@/components/custom/game/charts/examples/CustomStackedBarChart";
import CustomLineChart from "@/components/custom/game/charts/examples/CustomLineChart";
import CustomPieChart from "@/components/custom/game/charts/examples/CustomPieChart";
import baseStyles from "@/components/custom/Style";

const CustomSegmentedButton = ({ value, onValueChange }) => {
  return (
    <SegmentedButtons
      value={value}
      onValueChange={onValueChange}
      buttons={[
        { value: "stackedBarChart", label: "Bar", icon: "chart-bar-stacked" },
        { value: "lineChart", label: "Line", icon: "chart-line" },
        { value: "pieChart", label: "Pie", icon: "chart-pie" },
      ]}
      style={[baseStyles.headerContainer, { ...style.segmentedButton }]}
    ></SegmentedButtons>
  );
};

const style = StyleSheet.create({
  segmentedButton: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
  },
});
export default CustomSegmentedButton;
