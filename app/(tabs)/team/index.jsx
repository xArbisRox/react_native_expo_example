import React from "react";

import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

const GamesPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the default Team Page!</Text>
    </View>
  );
};

export default GamesPage;
