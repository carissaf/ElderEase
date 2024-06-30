import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Speech from "expo-speech";
import { useRoute } from "@react-navigation/native";
import { ReadTextResultRouteProp } from "@/app/navigation";
import { Ionicons } from "@expo/vector-icons";
import PolygonPurple from "@/assets/images/PolygonPurple.svg";
import EllipseOrange from "@/assets/images/EllipseOrange.svg";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import EllipseGreen from "@/assets/images/EllipseGreen.svg";
import BackButton from "@/components/BackButton";

export default function ReadTextResult() {
  const route = useRoute<ReadTextResultRouteProp>();
  const { text }: { text: string } = route.params;

  const styles = StyleSheet.create({
    text: { fontFamily: "Inter_400Regular" },
    title: { fontFamily: "Inter_700Bold" },
  });

  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      if (isSpeaking) {
        Speech.stop();
      }
    };
  }, [isSpeaking]);

  const handleSpeak = () => {
    console.log(text);
    if (!isSpeaking) {
      const optionsSpeech = {
        onDone: () => setIsSpeaking(false),
        onStopped: () => setIsSpeaking(false),
        voice: "id-id-x-idd-local",
      };
      Speech.speak(text, optionsSpeech);
      setIsSpeaking(true);
    }
  };

  const handleStop = () => {
    Speech.stop();
    setIsSpeaking(false);
  };

  const handlePlayStop = () => {
    if (isSpeaking) {
      handleStop();
    } else {
      handleSpeak();
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-between items-center px-5 pt-5 pb-10 bg-white">
      <View className="w-full flex-row items-center">
        {/*<TouchableOpacity className="bg-btn-active flex rounded-full h-14 w-14 items-center justify-center mr-3">*/}
        {/*  <Ionicons*/}
        {/*    size={32}*/}
        {/*    color="#FFF"*/}
        {/*    name="arrow-back"*/}
        {/*  />*/}
        {/*</TouchableOpacity>*/}
        <BackButton></BackButton>
        <Text
          className="text-2xl"
          style={styles.text}>
          Hasil Deteksi Teks
        </Text>
      </View>

      <PolygonPurple className="absolute bottom-[20%] left-[-5%] rotate-[20deg] shadow" />
      <EllipseOrange className="absolute bottom-[22%] left-[20%]" />
      <EllipseGreen className="absolute right-[-15%] top-[9%]" />

      <View className="justify-center items-center">
        <View className="max-h-40 min-h-0 align-middle items-center justify-center">
          <ScrollView>
            <Text
              style={styles.title}
              className="mb-6 text-2xl">
              {text}
            </Text>
          </ScrollView>
        </View>

        <TouchableOpacity
          className="bg-btn-active flex rounded-full h-20 w-20 items-center justify-center mt-3"
          onPress={handlePlayStop}>
          <Ionicons
            color="#FFF"
            size={48}
            name={isSpeaking ? "stop" : "play"}
          />
        </TouchableOpacity>
      </View>
      <CustomButton
        textStyles=""
        title="Selesai"
        onPress={() => router.push("../home")}></CustomButton>
    </SafeAreaView>
  );
}
