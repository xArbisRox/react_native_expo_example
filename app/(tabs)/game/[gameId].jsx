import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

const GamePage = () => {
  const { gameId } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Game Page for Game {gameId}!</Text>
    </View>
  );
};

export default GamePage;
