import React from "react";

import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

const GamesPage = () => {
  const { team_id } = useLocalSearchParams();
    return (
    <View>
      <Text>Welcome to the Games Page for Team {team_id}!</Text>
    </View>
  );
};

export default GamesPage;
