import { PopulationPyramid } from "react-native-gifted-charts";

const CustomPyramidChart = () => {
  return (
    <PopulationPyramid
      data={[
        { left: 10, right: 12 },
        { left: 9, right: 8 },
      ]}
    />
  );
};

export default CustomPyramidChart;
