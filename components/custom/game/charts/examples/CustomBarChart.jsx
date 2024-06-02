import { BarChart } from "react-native-gifted-charts";

const CustomBarChart = () => {
  const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];

  return <BarChart data={data} />;
};

export default CustomBarChart;
