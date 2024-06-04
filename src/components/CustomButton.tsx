import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Inter_600SemiBold, useFonts } from "@expo-google-fonts/inter";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  textStyles: string;
}

export default function CustomButton({ title, onPress, textStyles }: CustomButtonProps) {
  const [fontsLoaded] = useFonts({
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`rounded-2xl justify-center items-center py-4 bg-btn-active w-full ${textStyles}`}>
      <Text
        style={{ fontFamily: "Inter_600SemiBold" }}
        className="text-white text-lg">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
