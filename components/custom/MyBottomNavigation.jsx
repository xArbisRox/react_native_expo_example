import { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { BottomNavigation } from "react-native-paper";

const HomeRoute = () => <Text>Home</Text>;
const GamesRoute = () => <Text>Games</Text>;
const StatisticsRoute = () => <Text>Statistics</Text>;
const NotificationsRoute = () => <Text>Notifications</Text>;

const MyBottomNavigation = () => {
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "games",
      title: "Games",
      focusedIcon: "clipboard-list",
      unfocusedIcon: "clipboard-list-outline",
    },
    {
      key: "statistics",
      title: "Statistics",
      focusedIcon: "chart-box",
      unfocusedIcon: "chart-box-outline",
    },
    {
      key: "notifications",
      title: "Notifications",
      focusedIcon: "bell",
      unfocusedIcon: "bell-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    games: GamesRoute,
    statistics: StatisticsRoute,
    notifications: NotificationsRoute,
  });

  const style = StyleSheet.create({
    style: { position: "absolute", bottom: 0, width: "100%" },
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      style={style.style}
    />
  );
};
export default MyBottomNavigation;
