import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { CommonActions } from "@react-navigation/native";
import { BottomNavigation } from "react-native-paper";

const style = StyleSheet.create({
  tabBarLabel: {
    fontSize: 15,
  },
});
export default function MyTabs() {
  return (
    <Tabs
      // below tabBar is simply copy pasted boilerplate from the docs at https://callstack.github.io/react-native-paper/docs/components/BottomNavigation/BottomNavigationBar
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.title;

            return label;
          }}
        />
      )}
    >
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
