import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import PolygonPurple from "@/assets/images/PolygonPurple.svg";
import EllipseGreen from "@/assets/images/EllipseGreen.svg";
import { Text, View } from "react-native";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Inter_400Regular, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import { router, useNavigation } from "expo-router";
import CustomLink from "@/components/CustomLink";
import { RootStackParamList } from "@/app/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { signIn } from "@/firebase/firebaseService";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "SignIn">;
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailIsTaken, setEmailIsTaken] = useState(false);
  const navigation = useNavigation<NavigationProp>();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleSignIn = async () => {
    // navigation.navigate("Home");
    await signIn(email, password);
  };
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
        Masuk
      </Text>
      <View className="bg-white w-full mt-5 px-[7%] h-full rounded-t-3xl items-center">
        <View className="mb-[50%]">
          <FormField
            title="Email"
            value={email}
            handleChangeText={setEmail}
            placeholder=""
            icon="mail-outline"
            error={emailIsTaken}
          />
          <FormField
            title="Password"
            value={password}
            handleChangeText={setPassword}
            placeholder=""
            icon="lock-closed-outline"
            error={false}
          />
        </View>

        <CustomButton
          textStyles=""
          title="Masuk"
          onPress={() => router.push("home")}
        />
        <View className="flex flex-row items-center mt-2">
          <Text className="mr-1">Belum memiliki akun?</Text>
          <CustomLink
            title="Daftar"
            href="./sign-up"
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
