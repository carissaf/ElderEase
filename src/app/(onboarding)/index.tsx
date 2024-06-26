import { Image } from "react-native";
import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Tab One</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="app/(onboarding)/index.tsx" />
    // </View>
    <SafeAreaView>
      {/*<ScrollView>*/}
      <Image source={require("@/assets/images/Onboarding-Icon.png")} />
      <View>
        <Text>Selamat Datang di Elder Ease!</Text>
      </View>
      {/*</ScrollView>*/}
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: "80%",
//   },
// });
