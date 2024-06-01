import React from "react";

import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

const GamesPage = () => {
  const { teamId } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Team Page for Team {teamId}!</Text>
    </View>
  );
};

export default GamesPage;
