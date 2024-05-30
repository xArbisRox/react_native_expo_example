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
        name="[teamId]"
        options={{
          href: "/12",
          title: "Games",
          tabBarLabel: "Games",
          tabBarLabelStyle: style.tabBarLabel,
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome name="list-alt" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
