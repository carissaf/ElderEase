import React from "react";
import {Linking, Text, TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

// import RNImmediatePhoneCall from "react-native-immediate-phone-call";

interface EmergencyCallButtonProps {
  name: string;
  phonenumber: string;
}

export default function EmergencyCallButton({ name, phonenumber }: EmergencyCallButtonProps) {
  const handleCall = () => {
    // RNImmediatePhoneCall.immediatePhoneCall(phonenumber);
    Linking.openURL(`tel:${phonenumber}`);
  };
  return (
    <TouchableOpacity
      className="w-full h-[20vw] rounded-3xl items-center align-middle justify-center mb-4"
      onPress={handleCall}>
      <LinearGradient
        className="w-full rounded-3xl"
        colors={["#76CDF2", "#ACDBEF"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={{ flex: 1, position: "absolute", left: 0, right: "100%", top: 0, bottom: 0 }}
      />
      <Text
        className="p-6 text-3xl text-white text-center"
        style={{ fontFamily: "Inter_700Bold" }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}
