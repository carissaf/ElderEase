import React from "react";
import { Stack } from "expo-router";
import ReadTextCamera from "@/app/(read-text)/read-text-camera";
import ReadTextResult from "@/app/(read-text)/read-text-result";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/(read-text)/navigation";

export default function ReadText() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator initialRouteName="ReadTextCamera">
      <Stack.Screen
        options={{ headerShown: false }}
        name="ReadTextCamera"
        component={ReadTextCamera}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ReadTextResult"
        component={ReadTextResult}
      />
    </Stack.Navigator>
    // <Stack>
    //   <Stack.Screen
    //     options={{ headerShown: false }}
    //     name="read-text-camera"></Stack.Screen>
    // </Stack>
  );
}
