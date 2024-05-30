import React from "react";

import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

const StatisticsPage = () => {
  const { game_id } = useLocalSearchParams();
  return <Text>Welcome to the Statistics Page for Game {game_id}!</Text>;
};

export default StatisticsPage;
