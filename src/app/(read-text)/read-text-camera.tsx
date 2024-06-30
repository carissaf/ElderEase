import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CameraCapturedPicture, CameraView, FlashMode, useCameraPermissions } from "expo-camera";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CameraType } from "expo-camera/legacy";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/navigation";
import * as ImagePicker from "expo-image-picker";
import CustomButton from "@/components/CustomButton";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "ReadTextCamera">;

export default function ReadTextCamera() {
  const [permission, requestPermission] = useCameraPermissions();
  const [type, setType] = useState(CameraType.back);
  const [flashMode, setFlashMode] = useState<FlashMode>("off");
  const cameraRef = useRef<CameraView>(null); //hab no idea
  const navigation = useNavigation<NavigationProp>();
  const [imagePicked, setImagePicked] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pictureSize, setPictureSize] = useState<string>();
  const [availableSizes, setAvailableSizes] = useState<string[] | undefined>([]);

  const styles = StyleSheet.create({
    text: { fontFamily: "Inter_400Regular" },
    title: { fontFamily: "Inter_700Bold" },
    modal: {},
  });
  const changeFlashMode = () => {
    flashMode === "off" ? setFlashMode("on") : setFlashMode("off");
  };
  const changeCameraType = () => {
    type == CameraType.back ? setType(CameraType.front) : setType(CameraType.back);
  };

  if (!permission) {
    // Camera permissions are still loading.
    return (
      <View className="h-full justify-end flex-col items-center py-10 px-5 flex-1 bg-[#161618]">
        <TouchableOpacity className="flex rounded-full bg-white h-20 w-20 opacity-50"></TouchableOpacity>
        <View className="w-full justify-center flex-row mt-5 opacity-50">
          <TouchableOpacity>
            <Ionicons
              className="p-2"
              name="images-outline"
              size={36}
              color="#FFF"></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity className="mx-5">
            <Ionicons
              color="#FFFF"
              size={36}
              name={flashMode === "off" ? "flash-off-outline" : "flash-outline"}></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              color="#FFFF"
              size={36}
              name="camera-reverse-outline"></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View className="h-full justify-end flex-col items-center py-10 px-5 flex-1 bg-[#161618]">
        <View className="absolute top-[40%] px-6">
          <Text
            className="text-xl text-center text-white"
            style={styles.title}>
            Please allow ElderEase to access your camera
          </Text>
          <CustomButton
            title="Allow Access"
            onPress={requestPermission}
            textStyles="py-5 mt-5"
          />
        </View>
        <TouchableOpacity
          disabled={true}
          className="flex rounded-full bg-white h-20 w-20 opacity-50"></TouchableOpacity>
        <View className="w-full justify-center flex-row mt-5 opacity-50">
          <TouchableOpacity disabled={true}>
            <Ionicons
              className="p-2"
              name="images-outline"
              size={36}
              color="#FFF"></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={true}
            className="mx-5">
            <Ionicons
              color="#FFFF"
              size={36}
              name={flashMode === "off" ? "flash-off-outline" : "flash-outline"}></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity disabled={true}>
            <Ionicons
              color="#FFFF"
              size={36}
              name="camera-reverse-outline"></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      const picture: CameraCapturedPicture | undefined = await cameraRef.current.takePictureAsync({
        quality: 0,
      });
      if (picture) {
        console.log("Picture taken:", picture);
        await uploadImage(picture.uri);
      }
    }
  };
  const uploadImage = async (uri: string) => {
    const formData = new FormData();
    const fileType = uri.split(".").pop();
    formData.append("image", {
      uri,
      name: `photo.${fileType}`,
      type: `image/${fileType}`,
    } as any); // TypeScript requires an explicit cast to any for FormData's append

    try {
      // http://10.0.2.2:5000/process_img
      // http://192.168.188.158/process_img
      const response = await fetch("https://bb53-140-213-31-47.ngrok-free.app/process_img", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const data = await response.json();
      console.log(data.text);

      if (data.text === "") {
        setIsModalVisible(true);
        return;
      }
      navigation.navigate("ReadTextResult", { text: data.text });
    } catch (error) {
      console.error(error);
    }
  };

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImagePicked(result.assets[0].uri);
      await uploadImage(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView className="flex-1">
      <CameraView
        ref={cameraRef}
        className="flex-1"
        facing={type}
        // enableTorch={true}
        flash={flashMode}>
        <View className="h-full justify-end flex-col items-center py-10 px-5">
          <View className="p-2 border-btn-disabled border-2 bg-bg-blue-transparent rounded-xl mb-3">
            <Text className="text-btn-disabled">Arahkan kamera Anda pada teks yang ingin Anda baca dan ambil foto dengan menekan tombol kamera</Text>
          </View>
          <TouchableOpacity
            className="flex rounded-full bg-white h-20 w-20"
            onPress={handleTakePicture}></TouchableOpacity>
          <View className="w-full justify-center flex-row mt-5">
            <TouchableOpacity onPress={handlePickImage}>
              <Ionicons
                className="p-2"
                name="images-outline"
                size={36}
                color="#FFF"></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity
              className="mx-5"
              onPress={changeFlashMode}>
              <Ionicons
                color="#FFFF"
                size={36}
                name={flashMode === "off" ? "flash-off-outline" : "flash-outline"}></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity onPress={changeCameraType}>
              <Ionicons
                color="#FFFF"
                size={36}
                name="camera-reverse-outline"></Ionicons>
            </TouchableOpacity>
          </View>
        </View>
      </CameraView>

      <Modal
        animationType="slide"
        transparent={true}
        className="bg-black"
        visible={isModalVisible}>
        {/*cannot add styles to modal*/}
        <View
          style={styles.modal}
          className="flex-1 justify-center align-middle items-center">
          <View className="w-80 bg-white px-5 py-6 rounded-3xl">
            <View>
              <Text
                className="text-2xl"
                style={styles.title}>
                Error Deteksi Tulisan
              </Text>
              <Text style={styles.text}>Maaf, kami mengalami kesulitan membaca teks yang Anda foto. Tolong ambil foto kembali</Text>
            </View>
            <CustomButton
              title="Coba Lagi"
              onPress={() => setIsModalVisible(false)}
              textStyles="bg-bg-red mt-5"
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
