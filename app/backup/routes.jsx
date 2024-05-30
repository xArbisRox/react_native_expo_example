import { Pressable, Text, View } from "react-native";
import { Link, router } from "expo-router";

// Two ways to define the route redirect, via <Link> and router.push()
const HomeRoute = () => <Link href={"/"}>Go to Home Page</Link>;
const GamesRoute = () => (
  <Link
    href={{
      pathname: "/games/[team_id]",
      params: { team_id: 2 },
    }}
  >
    Go to Games 2 Page
  </Link>
);
const StatisticsRoute = () => (
  <Pressable onPress={() => router.push("/statistics/5")}>
    <Text>Go to Statistics 5 Page</Text>
  </Pressable>
);
const NotificationsRoute = () => (
  <Pressable
    onPress={() =>
      router.push({
        pathname: "/notifications/[id]",
        params: { id: 1 },
      })
    }
  >
    <Text>Go to Notifications 1 Page</Text>
  </Pressable>
);

export { HomeRoute, GamesRoute, StatisticsRoute, NotificationsRoute };
