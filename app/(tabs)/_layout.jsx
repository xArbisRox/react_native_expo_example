import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  tabBarLabel: {
    fontSize: 15,
  },
});
export default function MyTabs() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarLabelStyle: style.tabBarLabel,
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome name="home" size={24} color="black" />;
          },
        }}
      />
      <Tabs.Screen
        name="team"
        options={{
          href: "/team",
          title: "Games",
          tabBarLabel: "Games",
          tabBarLabelStyle: style.tabBarLabel,
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome name="list-alt" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="game"
        options={{
          href: "/game",
          title: "Statistics",
          tabBarLabel: "Statistics",
          tabBarLabelStyle: style.tabBarLabel,
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome name="pie-chart" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
