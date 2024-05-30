import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CameraCapturedPicture, CameraView, FlashMode, useCameraPermissions } from "expo-camera";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { CameraType } from "expo-camera/legacy";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/(read-text)/navigation";
import * as ImagePicker from "expo-image-picker";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "ReadTextCamera">;

export default function ReadTextCamera() {
  const [permission, requestPermission] = useCameraPermissions();
  const [type, setType] = useState(CameraType.back);
  const [flashMode, setFlashMode] = useState<FlashMode>("off");
  const cameraRef = useRef<CameraView>(null); //hab no idea
  const [text, setText] = useState<string>("");
  const navigation = useNavigation<NavigationProp>();
  const [imagePicked, setImagePicked] = useState("");

  const changeFlashMode = () => {
    flashMode === "off" ? setFlashMode("on") : setFlashMode("off");
  };
  const changeCameraType = () => {
    type == CameraType.back ? setType(CameraType.front) : setType(CameraType.back);
  };

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <Button
          onPress={requestPermission}
          title="grant permission"
        />
      </View>
    );
  }
  const handleTakePicture = async () => {
    if (cameraRef.current) {
      const picture: CameraCapturedPicture | undefined = await cameraRef.current.takePictureAsync();
      if (picture) {
        console.log("Picture taken:", picture);
        await uploadImage(picture.uri);
      }

      // const picture: CameraCapturedPicture | undefined = await cameraRef.current.takePictureAsync();
      // if (picture) {
      //   console.log("Picture taken:", picture);
      //   const uri = picture.uri;
      //   const fileType = uri.split(".").pop();
      //
      //   const file = await fetch(uri);
      //   const fileBlob = await file.blob();
      //   // create form data
      //   const formData = new FormData();
      //   formData.append("image", fileBlob, `photo.${fileType}`);
      //
      //   try {
      //     const response = await fetch("http://10.0.2.2:5000/process_img", {
      //       //192.168.178.158
      //       method: "GET",
      //       // body: formData,
      //     });
      //
      //     const data = await response.json();
      //     console.log(data);
      //     console.log("dfkads");
      //   } catch (error: any) {
      //     console.log(error.stack);
      //     Object.values(error).forEach((value) => {
      //       console.log(value);
      //     });
      //   }
      // }
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
      // https://4c5f-140-213-136-24.ngrok-free.app/process_img
      const response = await fetch("http://10.0.2.2:5000/process_img", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const data = await response.json();
      console.log(data.text);
      setText(data.text);
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
          <TouchableOpacity
            className="flex rounded-full bg-white h-20 w-20"
            onPress={handleTakePicture}></TouchableOpacity>
          <View className="w-full justify-center flex-row mt-5">
            <TouchableOpacity onPress={handlePickImage}>
              <Ionicons
                className=""
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
    </SafeAreaView>
  );
}
