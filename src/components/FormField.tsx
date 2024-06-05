import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface FormFieldProps {
  title: string;
  value: string;
  placeholder: string;
  icon: keyof typeof Ionicons.glyphMap;
  handleChangeText: (text: string) => void;
}

export default function FormField({ title, value, handleChangeText, placeholder, icon }: FormFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="w-full">
      <Text
        className="text-lg mt-[7%]"
        style={{ fontFamily: "Inter_700Bold" }}>
        {title}
      </Text>
      <View className="bg-bg-secondary mt-2 py-4 px-5 rounded-xl flex flex-row items-center justify-between">
        <View className="flex flex-row ">
          <Ionicons
            name={icon}
            size={24}
          />
          <TextInput
            className="text-lg px-3 flex w-[80%]"
            style={{ fontFamily: "Inter_400Regular" }}
            value={value}
            placeholder={placeholder}
            onChangeText={handleChangeText}
            secureTextEntry={title === "Password" && !showPassword}></TextInput>
        </View>

        <TouchableOpacity
          className={`${title === "Password" ? "opacity-100" : "opacity-0"}`}
          disabled={!(title === "Password")}
          onPress={() => {
            showPassword ? setShowPassword(false) : setShowPassword(true);
          }}>
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
