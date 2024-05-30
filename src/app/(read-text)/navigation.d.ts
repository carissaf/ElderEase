import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  ReadTextCamera: undefined;
  ReadTextResult: { text: string };
};

type ReadTextResultRouteProp = RouteProp<RootStackParamList, "ReadTextResult">;
type ReadTextResultNavigationProp = NativeStackNavigationProp<RootStackParamList, "ReadTextResult">;

export type { RootStackParamList, ReadTextResultRouteProp, ReadTextResultNavigationProp };
