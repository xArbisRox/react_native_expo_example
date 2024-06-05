import React, { useState } from "react";

import { View, StyleSheet } from "react-native";
import CustomSegmentedButton from "@/components/custom/game/CustomSegmentedButton";
import CustomStackedBarChart from "@/components/custom/game/charts/examples/CustomStackedBarChart";
import CustomLineChart from "@/components/custom/game/charts/examples/CustomLineChart";
import CustomPieChart from "@/components/custom/game/charts/examples/CustomPieChart";

const SelectAndChartView = () => {
  const CHART_MAPPER = {
    stackedBarChart: CustomStackedBarChart,
    lineChart: CustomLineChart,
    pieChart: CustomPieChart,
  };

  const [chartType, setChartType] = useState("stackedBarChart");

  const getChart = (chartType) => {
    return CHART_MAPPER[chartType];
  };

  const Chart = getChart(chartType);

  return (
    <View style={styles.chartContainer}>
      <CustomSegmentedButton value={chartType} onValueChange={setChartType} />
      <Chart />
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    width: "100%",
    flex: 1,
  },
});

export default SelectAndChartView;
