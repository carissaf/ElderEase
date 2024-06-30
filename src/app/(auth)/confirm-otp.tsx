import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import PolygonPurple from "@/assets/images/PolygonPurple.svg";
import EllipseGreen from "@/assets/images/EllipseGreen.svg";
import { Text, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import CustomLink from "@/components/CustomLink";
import { OtpInput } from "react-native-otp-entry";
import { useRoute } from "@react-navigation/native";
import { ConfirmOTPRouteProp } from "@/app/navigation";
import { useNavigation } from "expo-router";

export default function ConfirmOTP() {
  const navigation = useNavigation();
  const route = useRoute<ConfirmOTPRouteProp>();
  const { email, username, password }: { email: string; username: string; password: string } = route.params;
  const [otp, setOtp] = useState("");

  return (
    <SafeAreaView className="bg-white relative h-full w-full">
      <LinearGradient
        className="w-full"
        colors={["rgba(118,205,242,0)", "rgba(222,245,255,0.7)"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{ flex: 1, position: "absolute", left: 0, right: "50%", top: 0, bottom: 0 }}
      />
      <PolygonPurple
        width={100}
        className="absolute top-9 z-10 right-[5%] rotate-[20deg] shadow"
      />
      <EllipseGreen
        width={50}
        className="absolute z-20 top-5 right-[19%]"></EllipseGreen>
      <LinearGradient
        className="w-full"
        colors={["rgb(231,218,255)", "rgba(167,124,247,0)"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1, position: "absolute", left: 0, right: "100%", top: 0, bottom: 0 }}
      />
      <Text
        className="text-3xl text-black mt-10 px-5 w-full"
        style={{ fontFamily: "Inter_700Bold" }}>
        Kode OTP
      </Text>
      <View className="bg-white w-full mt-5 px-[7%] h-full rounded-t-3xl items-center">
        <View className="w-full mb-[50%]">
          <Text
            className="mt-10 mb-5"
            style={{ fontFamily: "Inter_400Regular" }}>
            Kami telah mengirimkan kode OTP ke {email}
          </Text>
          <OtpInput
            numberOfDigits={4}
            onTextChange={(text) => setOtp(text)}
            focusColor="#2F79E9"
            focusStickBlinkingDuration={600}
            theme={{
              pinCodeContainerStyle: { width: 72, height: 84, borderWidth: 1.5 },
            }}></OtpInput>
        </View>

        <CustomButton
          textStyles=""
          title="Kirim"
          onPress={() => {}}
        />

        <View className="flex flex-row items-center mt-2">
          <Text
            style={{ fontFamily: "Inter_400Regular" }}
            className="mr-1">
            Belum menerima kode OTP?
          </Text>
          <CustomLink
            title="Kirimkan Ulang"
            href="./sign-in"
            onPress={() => {
              // navigation.navigate("Home");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
