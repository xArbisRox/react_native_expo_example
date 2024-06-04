import { View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const CustomPieChart = () => {
  const data = [
    { value: 50, text: "50", color: "#93FCF8" },
    { value: 80, text: "80", color: "#BDB2FA" },
    { value: 40, text: "40", color: "#FFA5BA" },
    { value: 80, text: "80", color: "#0000FF" },
  ];
  const renderDot = (color) => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };
  const renderLegendComponent = () => {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: 120,
              marginRight: 20,
            }}
          >
            {renderDot("#0000FF")}
            <Text style={{ color: "white" }}>Patrick: 80</Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", width: 120 }}
          >
            {renderDot("#93FCF8")}
            <Text style={{ color: "white" }}>Basti: 50</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: 120,
              marginRight: 20,
            }}
          >
            {renderDot("#BDB2FA")}
            <Text style={{ color: "white" }}>Ike: 80</Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", width: 120 }}
          >
            {renderDot("#FFA5BA")}
            <Text style={{ color: "white" }}>Jan: 40</Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <View
      style={{
        paddingVertical: 100,
        backgroundColor: "#34448B",
        flex: 1,
      }}
    >
      <View
        style={{
          margin: 20,
          padding: 16,
          borderRadius: 20,
          backgroundColor: "#232B5D",
        }}
      >
        <View style={{ padding: 20, alignItems: "center" }}>
          <PieChart
            style={{ padding: 20, alignItems: "center" }}
            data={data}
            showText
            showTextBackground
            textBackgroundColor="white"
            textColor="black"
            focusOnPress
            showValuesAsLabels
          />
        </View>
        {renderLegendComponent()}
      </View>
    </View>
  );
};

export default CustomPieChart;
