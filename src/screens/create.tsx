import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  AsyncStorage,
  ToastAndroid,
} from "react-native";
import colors from "tailwindcss/colors";
import { Header } from "../components/header";

export function Create() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const navigation = useNavigation();

  async function create() {
    try {
      const data = {
        title,
        text,
      };

      if (data.text && data.title !== "") {
        const notes = await AsyncStorage.getItem("@Notes");
        const previewsNotes = notes ? JSON.parse(notes) : [];
        const currentNotes = [data, ...previewsNotes];
        await AsyncStorage.setItem("@Notes", JSON.stringify(currentNotes));
        ToastAndroid.show("Nota criada com sucesso!", ToastAndroid.CENTER);
        navigation.navigate("home");
      } else {
        if (data.text || data.title !== "") {
          ToastAndroid.show("Vamos complete sua nota!", ToastAndroid.CENTER);
        } else {
          ToastAndroid.show("Vamos crie sua nota!", ToastAndroid.CENTER);
        }
      }
    } catch (error) {
      console.log(error);
      ToastAndroid.show("Opps... Algo deu errado!", ToastAndroid.CENTER);
    }
  }

  return (
    <SafeAreaView className="bg-background flex-1 relative p-6 pt-12 ">
      <Header onSubmit={create} />
      <View className="flex-1 ">
        <TextInput
          className="text-white text-2xl font-semibold px-2 py-6"
          placeholderTextColor={colors.gray[500]}
          placeholder="Título"
          onChangeText={setTitle}
          maxLength={20}
        />

        <TextInput
          className="text-gray-400 text-lg font-normal px-2 py-1 "
          multiline
          textAlignVertical="top"
          placeholder="Comece a escrever..."
          placeholderTextColor={colors.gray[500]}
          onChangeText={setText}
          maxLength={400}
        />
      </View>
    </SafeAreaView>
  );
}
