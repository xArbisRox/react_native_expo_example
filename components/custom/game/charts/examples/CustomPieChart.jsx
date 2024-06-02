import { PieChart } from "react-native-gifted-charts";

const CustomPieChart = () => {
    const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];

    return <PieChart data={data} />;
};

export default CustomPieChart;
