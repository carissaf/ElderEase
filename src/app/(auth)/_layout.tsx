import { Stack } from "expo-router";
import SignIn from "@/app/(auth)/sign-in";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "@/app/(auth)/sign-up";
import { RootStackParamList } from "@/app/navigation";
import ConfirmOTP from "@/app/(auth)/confirm-otp";

export default function AuthLayout() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ConfirmOTP"
        component={ConfirmOTP}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
