import React from "react";
import { Stack } from "expo-router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/(read-text)/navigation";
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import EmergencyCallList from "@/app/(emergency-call)/emergency-call-list";

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
        name="EmergencyCallList"
        component={EmergencyCallList}
      />
    </Stack.Navigator>
  );
}
