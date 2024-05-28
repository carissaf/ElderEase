import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface FeatureButtonProps {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  onPress: () => void;
}

export default function FeatureButton({ title, icon, color, onPress }: FeatureButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="border-2 w-[43vw] h-[40vw] rounded-3xl items-center align-middle justify-center mb-4"
      style={{ borderColor: color }}>
      <Ionicons
        color={color}
        name={icon}
        size={48}
      />
      <Text
        className="text-2xl mt-1 text-center"
        style={{ fontFamily: "Inter_600SemiBold", color: color }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
