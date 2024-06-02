import { LineChart } from "react-native-gifted-charts";

const CustomLineChart = () => {
    const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];

    return <LineChart data={data} />;
};

export default CustomLineChart;
