import React from "react";
import {Text, View} from "@/components/Themed";
import {SafeAreaView} from "react-native-safe-area-context";
import {Inter_400Regular, Inter_700Bold, useFonts} from "@expo-google-fonts/inter";
import PolygonPurple from "@/assets/images/PolygonPurple.svg";
import EllipseOrange from "@/assets/images/EllipseOrange.svg";
import EllipseGreen from "@/assets/images/EllipseGreen.svg";
import {Image} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import CustomButton from "@/components/CustomButton";
import {router} from "expo-router";
import CustomLink from "@/components/CustomLink";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>["name"]; color: string }) {
//   return (
//     <FontAwesome
//       size={28}
//       style={{ marginBottom: -3 }}
//       {...props}
//     />
//   );
// }

export default function TabLayout() {
  // const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="bg-white relative flex-1 justify-end align-middle">
      {/*<ScrollView>*/}
      <Image
        className="w-full top-[18%] flex absolute z-10 justify-self-center"
        resizeMode="contain"
        source={require("@/assets/images/Onboarding-Icon.png")}
      />
      <LinearGradient
        className="w-full"
        colors={["rgba(118,205,242,0)", "rgba(222,245,255,0.7)"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{ flex: 1, position: "absolute", left: 0, right: "50%", top: 0, bottom: 0 }}
      />
      <LinearGradient
        className="w-full"
        colors={["rgb(231,218,255)", "rgba(167,124,247,0)"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1, position: "absolute", left: 0, right: "100%", top: 0, bottom: 0 }}
      />
      <PolygonPurple className="absolute top-9 right-[-5%] rotate-[20deg] shadow" />
      <EllipseOrange className="absolute top-[12%] right-[19%]" />

      <View className="bg-white h-3/5 px-10 bottom-0 rounded-t-3xl items-center">
        <EllipseGreen className="absolute left-[-15%] bottom-0" />
        <Text
          className="text-3xl mt-32 flex w-full text-black"
          style={{ fontFamily: "Inter_400Regular" }}>
          Selamat Datang di{" "}
          <Text
            className="text-black"
            style={{ fontFamily: "Inter_700Bold" }}>
            ElderEase
          </Text>
        </Text>
        <Text
          className="mt-5 mb-10 flex w-full text-black"
          style={{ fontFamily: "Inter_400Regular" }}>
          ElderEase adalah rekan ramah Anda yang dirancang untuk memudahkan komunikasi bagi para manula. Bergabunglah bersama kami untuk menjadikan
          interaksi sehari-hari lebih sederhana dan lebih mudah diakses oleh semua orang!
        </Text>
        <CustomButton
          title="Mulai"
          onPress={() => router.push("../sign-up")}
        />
        <CustomLink
          title="Masuk"
          href="../sign-in"
        />
      </View>
      {/*</LinearGradient>*/}
    </SafeAreaView>
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    //     // Disable the static render of the header on web
    //     // to prevent a hydration error in React Navigation v6.
    //     headerShown: useClientOnlyValue(false, true),
    //   }}>
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: 'Tab One',
    //       tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
    //       headerRight: () => (
    //         <Link href="/modal" asChild>
    //           <Pressable>
    //             {({ pressed }) => (
    //               <FontAwesome
    //                 name="info-circle"
    //                 size={25}
    //                 color={Colors[colorScheme ?? 'light'].text}
    //                 style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
    //               />
    //             )}
    //           </Pressable>
    //         </Link>
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="two"
    //     options={{
    //       title: 'Tab Two',
    //       tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
    //     }}
    //   />
    // </Tabs>
  );
}
