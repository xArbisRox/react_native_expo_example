import { Stack } from "expo-router";

export default function TeamLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[teamId]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
