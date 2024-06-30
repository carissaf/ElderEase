import React from "react";
import { Stack } from "expo-router";
import ReadTextCamera from "@/app/(read-text)/read-text-camera";
import ReadTextResult from "@/app/(read-text)/read-text-result";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/navigation";
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";

export default function ReadText() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
  });
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
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
