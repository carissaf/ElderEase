import React from "react";
import { Text, TouchableOpacity } from "react-native";
import * as Speech from "expo-speech";
import { LinearGradient } from "expo-linear-gradient";

interface ActivityButtonProps {
  title: string;
  color1: string;
  color2: string;
}

interface Voice {
  identifier: string;
  name: string;
  quality: string;
  language: string;
}

export default function ActivityButton({ title, color1, color2 }: ActivityButtonProps) {
  const speak = () => {
    const optionsSpeech = { voice: "id-id-x-idd-local" };
    Speech.speak(title, optionsSpeech);
  };
  return (
    <TouchableOpacity
      className="w-[43vw] h-[40vw] rounded-3xl items-center align-middle justify-center mb-4"
      onPress={speak}>
      <LinearGradient
        className="w-full rounded-3xl"
        colors={[color1, color2]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={{ flex: 1, position: "absolute", left: 0, right: "100%", top: 0, bottom: 0 }}
      />
      <Text
        className="p-6 text-3xl text-white"
        style={{ fontFamily: "Inter_700Bold" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
