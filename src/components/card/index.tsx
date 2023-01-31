import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  AsyncStorage,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DeleteButton } from "../deleteButton";
// import { DeleteButton } from "../deleteButton";

interface CardProps {
  text: string;
  title: string;
  index: number;
  color?: string;
  onDelete(index: number): Promise<void>;
}

export function Card({ text, title, index, color, onDelete }: CardProps) {
  const bgcolor = "bg-" + color;
  const borderColor = "border-" + color;

  const navigation = useNavigation();

  function goUpdate() {
    navigation.navigate("update", { title, text, index });
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={goUpdate}
      className={`w-[45%] m-2 h-48 p-2 rounded-2xl bg-zinc-900 overflow-hidden`}
    >
      <View className="w-[100%] h-[85%] overflow-hidden ">
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          className="text-lg mx-1 font-normal text-white "
        >
          {title}
        </Text>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          className="text-lg mx-1 font-normal text-gray-400 "
        >
          {text}
        </Text>
      </View>
      <DeleteButton onPress={() => onDelete(index)} />
    </TouchableOpacity>
  );
}
