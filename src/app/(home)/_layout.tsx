import React from "react";
import { Stack } from "expo-router";

export default function Home() {
  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{ headerShown: false }}></Stack.Screen>
    </Stack>
  );
}
