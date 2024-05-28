import React from "react";
import { Stack } from "expo-router";

export default function ReadText() {
  return (
    <Stack>
      <Stack.Screen
        options={{ headerShown: false }}
        name="read-text-camera"></Stack.Screen>
    </Stack>
  );
}
