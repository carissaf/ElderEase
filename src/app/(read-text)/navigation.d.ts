import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  ReadTextCamera: undefined;
  ReadTextResult: { text: string };
  EmergencyCallList: undefined;
};

type ReadTextResultRouteProp = RouteProp<RootStackParamList, "ReadTextResult">;
type ReadTextResultNavigationProp = NativeStackNavigationProp<RootStackParamList, "ReadTextResult">;
type EmergencyCallListNavigationProp = NativeStackNavigationProp<RootStackParamList, "EmergencyCallList">;

export type { RootStackParamList, ReadTextResultRouteProp, ReadTextResultNavigationProp, EmergencyCallListNavigationProp };
