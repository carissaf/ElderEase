import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Speech from "expo-speech";
import { useRoute } from "@react-navigation/native";
import { ReadTextResultRouteProp } from "@/app/(read-text)/navigation";

export default function ReadTextResult() {
  const route = useRoute<ReadTextResultRouteProp>();
  const { text }: { text: string } = route.params;

  const [isSpeaking, setIsSpeaking] = useState(false);

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

  const handlePause = () => {
    Speech.pause();
    setIsSpeaking(false);
  };

  const handleResume = () => {
    Speech.resume();
    setIsSpeaking(true);
  };

  const handleStop = () => {
    Speech.stop();
    setIsSpeaking(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>{text}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
        <Button
          title="Play"
          onPress={handleSpeak}
          disabled={isSpeaking}
        />
        <Button
          title="Pause"
          onPress={handlePause}
          disabled={!isSpeaking}
        />
        <Button
          title="Resume"
          onPress={handleResume}
          disabled={isSpeaking}
        />
        <Button
          title="Stop"
          onPress={handleStop}
        />
      </View>
    </SafeAreaView>
  );
}
