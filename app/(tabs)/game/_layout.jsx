import { Stack } from "expo-router";

export default function GameLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[gameId]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
