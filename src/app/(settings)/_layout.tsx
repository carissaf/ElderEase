import React from "react";
import { Stack } from "expo-router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/navigation";
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import SettingsOptions from "@/app/(settings)/settings-options";

export default function Settings() {
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
        name="SettingsOptions"
        component={SettingsOptions}
      />
    </Stack.Navigator>
  );
}
