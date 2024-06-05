import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/BackButton";
import { Ionicons } from "@expo/vector-icons";
import EmergencyCallButton from "@/components/EmergencyCallButton";

interface CallListProps {
  name: string;
  phonenumber: string;
}

const data: CallListProps[] = [
  { name: "Car", phonenumber: "083871735333" },
  { name: "cece", phonenumber: "083871735222" },
];
export default function EmergencyCallList() {
  // const [callListData, setCallListData] = useState<CallLlistProps[]>();

  // setCallListData([{ name: "Carissa", phonenumber: "083871735333" }]);

  return (
    <SafeAreaView>
      <View className="px-5 pt-2">
        <View className="flex-row justify-between items-center mb-5">
          <View className="flex-row items-center">
            <BackButton />
            <Text className="text-2xl">Telepon Darurat</Text>
          </View>
          <Ionicons
            size={48}
            name="create-outline"
          />
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <EmergencyCallButton
              name={item.name}
              phonenumber={item.phonenumber}
            />
          )}
          // keyExtractor={(item) => item.}
        />
      </View>
    </SafeAreaView>
  );
}
