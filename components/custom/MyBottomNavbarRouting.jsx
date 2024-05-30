import React from "react";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import GamesPage from "../../app/backup/games/[team_id]";
import StatisticsPage from "../../app/backup/statistics/[game_id]";
import NotificationsPage from "../../app/backup/notifications/[id]";

const Tab = createMaterialBottomTabNavigator();

export const MyBottomNavbarRouting = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Home"
        component={GamesPage}
        options={{
          tabBarIcon: "home",
          tabBarColor: "#6200ee",
        }}
      />
      <Tab.Screen
        name="Games"
        component={GamesPage}
        options={{
          tabBarIcon: "clipboard-list",
          tabBarColor: "#009688",
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatisticsPage}
        options={{
          tabBarIcon: "chart-box",
          tabBarColor: "#3f51b5",
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsPage}
        options={{
          tabBarIcon: "bell",
          tabBarColor: "#795548",
        }}
      />
    </Tab.Navigator>
  );
};
