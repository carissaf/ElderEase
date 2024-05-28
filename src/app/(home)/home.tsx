import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import { SafeAreaView } from "react-native-safe-area-context";
import ActivityButton from "@/components/ActivityButton";
import FeatureButton from "@/components/FeatureButton";

export default function Home() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
  });

  const styles = StyleSheet.create({
    text: { fontFamily: "Inter_400Regular" },
    title: { fontFamily: "Inter_700Bold" },
  });

  return (
    <SafeAreaView className="h-full mt-5 px-5">
      <Text
        className="text-3xl mb-5"
        style={styles.text}>
        Halo, <Text style={styles.title}>Sumiyarti</Text> 👋
      </Text>halooo

      {/*Tombol Aktivitas*/}
      <View className="flex">
        <Text
          className="text-xl mb-3"
          style={styles.text}>
          Tombol Aktivitas
        </Text>
        <View className="flex flex-wrap w-full flex-row justify-between">
          <ActivityButton
            title="Iya"
            color1="#6CE0A9"
            color2="#A4F3CE"
          />
          <ActivityButton
            title="Tidak"
            color1="#E06C73"
            color2="#E9A3A7"
          />
          <ActivityButton
            title="Makan"
            color1="#F8AD79"
            color2="#EFC1A0"
          />
          <ActivityButton
            title="Toilet"
            color1="#76CDF2"
            color2="#ACDBEF"
          />
        </View>
      </View>

      {/*Fitur Lainnya*/}
      <View>
        <Text
          className="text-xl mb-3"
          style={styles.text}>
          Fitur Lainnya
        </Text>
        <View>
          <FeatureButton
            title="Baca Tulisan"
            icon="camera-outline"
            color="#76CDF2"
            onPress={() => console.log("hhdskfjdfs")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
