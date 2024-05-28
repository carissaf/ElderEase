import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CameraCapturedPicture, CameraView, useCameraPermissions } from "expo-camera";
import { TouchableOpacity, View } from "react-native";
import { CameraType, FlashMode } from "expo-camera/legacy";
import { Ionicons } from "@expo/vector-icons";

export default function ReadTextCamera() {
  const [permission, requestPermission] = useCameraPermissions();
  const [type, setType] = useState(CameraType.back);
  const [flashMode, setFlashMode] = useState(FlashMode.off);
  const cameraRef = useRef<CameraView>(null); //hab no idea

  const changeFlashMode = () => {
    flashMode == FlashMode.off ? setFlashMode(FlashMode.on) : setFlashMode(FlashMode.off);
  };

  const changeCameraType = () => {
    type == CameraType.back ? setType(CameraType.front) : setType(CameraType.back);
  };

  // if (!permission) {
  //   //permission loading
  //   return <View />;
  // }

  // if (!permission.granted) {
  //   //not granted
  //   return <View></View>;
  // }
  const handleTakePicture = async () => {
    if (cameraRef.current) {
      const picture: CameraCapturedPicture | undefined = await cameraRef.current.takePictureAsync();
      if (picture) {
        console.log("Picture taken:", picture);
      }
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <CameraView
        ref={cameraRef}
        className="flex-1"
        facing={type}
        flash={FlashMode.on}>
        <View className="h-full justify-end flex-col items-center py-10 px-5">
          <TouchableOpacity
            className="flex rounded-full bg-white h-20 w-20"
            onPress={handleTakePicture}></TouchableOpacity>
          <View className="w-full justify-center flex-row mt-5">
            <TouchableOpacity
              className="mr-5"
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
    </SafeAreaView>
  );
}
