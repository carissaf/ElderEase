import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/BackButton";
import { logOut } from "@/firebase/firebaseService";

export default function SettingsOptions() {
  // const [callListData, setCallListData] = useState<CallLlistProps[]>();

  // setCallListData([{ name: "Carissa", phonenumber: "083871735333" }]);

  return (
    <SafeAreaView>
      <View className="px-5 pt-2">
        <View className="flex-row justify-between items-center mb-5">
          <View className="flex-row items-center">
            <BackButton />
            <Text className="text-2xl">Settings</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            logOut();
          }}>
          <Text>logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
