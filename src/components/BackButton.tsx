import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";

export default function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={navigation.goBack}
      className="bg-btn-active flex rounded-full h-14 w-14 items-center justify-center mr-3">
      <Ionicons
        size={32}
        color="#FFF"
        name="arrow-back"
      />
    </TouchableOpacity>
  );
}