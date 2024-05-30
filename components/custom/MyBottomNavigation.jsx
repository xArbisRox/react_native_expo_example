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

  const renderScene = ({ route, jumpTo }) => {
    console.log(route.key);
    console.log(jumpTo)
    switch (route.key) {
      case "home":
        return <HomeRoute jumpTo={jumpTo} />;
      case "games":
        return <GamesRoute jumpTo={jumpTo} />;
      case "statistics":
        return <StatisticsRoute jumpTo={jumpTo} />;
      case "notifications":
        return <NotificationsRoute jumpTo={jumpTo} />;
      default:
        return null;
    }
  };

  const style = StyleSheet.create({
    style: { position: "absolute", bottom: 0, width: "100%" },
  });

  const handleIndexChange = (index) => {
    setIndex(index);
  };

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={handleIndexChange}
      renderScene={renderScene}
      style={style.style}
    />
  );
};
export default MyBottomNavigation;
