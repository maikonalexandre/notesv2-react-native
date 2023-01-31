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

type RootStackParamList = {
  update: { text?: string; title?: string; index?: number };
};

type Props = NativeStackScreenProps<RootStackParamList, "update">;

export function Update({ route }: Props) {
  const { index, title: defaultTitle, text: defaultText } = route.params;

  const [title, setTitle] = useState(defaultTitle);
  const [text, setText] = useState(defaultText);

  const navigation = useNavigation();

  async function deleteNote() {
    const data = await AsyncStorage.getItem("@Notes");
    const previewsNote = JSON.parse(data ? data : "");

    const currentNotes = previewsNote?.filter((e: any, i: any) => {
      return i !== index;
    });

    await AsyncStorage.setItem("@Notes", JSON.stringify(currentNotes));
  }

  async function createNote() {
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
        ToastAndroid.show("Nota atualizada!", ToastAndroid.CENTER);
        navigation.navigate("home");
      } else {
        if (data.text || data.title !== "") {
          ToastAndroid.show("Vamos complete sua nota", ToastAndroid.CENTER);
        }
      }
    } catch (error) {
      console.log(error);
      ToastAndroid.show("Opps... Algo deu errado!", ToastAndroid.CENTER);
    }
  }

  async function update() {
    await deleteNote();
    await createNote();
  }

  return (
    <SafeAreaView className="bg-background flex-1 relative p-6 pt-12">
      <Header onSubmit={update} />
      <View className="flex-1 ">
        <TextInput
          className="text-white text-2xl font-semibold px-2 py-6"
          placeholderTextColor={colors.gray[500]}
          placeholder="Título"
          onChangeText={setTitle}
          maxLength={20}
        >
          {title}
        </TextInput>
        <TextInput
          className="text-gray-400 text-lg font-normal px-2 py-1  "
          multiline
          textAlignVertical="top"
          placeholder="Comece a escrever..."
          placeholderTextColor={colors.gray[500]}
          onChangeText={setText}
          maxLength={400}
        >
          {text}
        </TextInput>
      </View>
    </SafeAreaView>
  );
}
