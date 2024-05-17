import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface FormFieldProps {
  title: string;
  value: string;
  placeholder: string;
  icon: keyof typeof Ionicons.glyphMap;
}

export default function FormField({ title, value, placeholder, icon }: FormFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="w-full">
      <Text
        className="text-lg mt-[7%]"
        style={{ fontFamily: "Inter_700Bold" }}>
        {title}
      </Text>
      <View className="bg-bg-secondary mt-2 py-4 px-5 rounded-xl flex flex-row items-center">
        <Ionicons
          name={icon}
          size={24}
        />
        <TextInput
          className="text-lg px-3 w-full"
          style={{ fontFamily: "Inter_400Regular" }}
          // value={value}
          placeholder={placeholder}
          secureTextEntry={title === "Password" && !showPassword}></TextInput>
      </View>
    </View>
  );
}
