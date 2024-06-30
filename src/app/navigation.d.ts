import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  ReadTextCamera: undefined;
  ReadTextResult: { text: string };
  EmergencyCallList: undefined;
  SettingsOptions: undefined;
  SignUp: undefined;
  SignIn: undefined;
  ConfirmOTP: { email: string; username: string; password: string };
  Onboarding: undefined;
};

type ReadTextResultRouteProp = RouteProp<RootStackParamList, "ReadTextResult">;
type ReadTextResultNavigationProp = NativeStackNavigationProp<RootStackParamList, "ReadTextResult">;
type EmergencyCallListNavigationProp = NativeStackNavigationProp<RootStackParamList, "EmergencyCallList">;
type SignInNavigationProp = NativeStackNavigationProp<RootStackParamList, "SignIn">;
type SignUpNavigationProp = NativeStackNavigationProp<RootStackParamList, "SignUp">;
type ConfirmOTPRouteProp = RouteProp<RootStackParamList, "ConfirmOTP">;
type ConfirmOTPNavigationProp = NativeStackNavigationProp<RootStackParamList, "ConfirmOTP">;
type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;
type SettingsNavigationProp = NativeStackNavigationProp<RootStackParamList, "SettingsOptions">;
type OnboardingNavigationProp = NativeStackNavigationProp<RootStackParamList, "Onboarding">;

export type {
  RootStackParamList,
  ReadTextResultRouteProp,
  ReadTextResultNavigationProp,
  EmergencyCallListNavigationProp,
  ConfirmOTPRouteProp,
  ConfirmOTPNavigationProp,
  SignInNavigationProp,
  SignUpNavigationProp,
  HomeNavigationProp,
  SettingsNavigationProp,
  OnboardingNavigationProp,
};
