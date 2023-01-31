import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  onSubmit?: () => void;
}

export function Header({ onSubmit }: HeaderProps) {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }
  return (
    <View className="w-full flex-row items-center justify-between">
      <TouchableOpacity activeOpacity={0.5} onPress={goBack}>
        <Feather name="arrow-left" color={colors.orange[700]} size={30} />
      </TouchableOpacity>
      <View className="flex-row gap-2 items-center">
        {/* <Feather name="smartphone" color={colors.orange[700]} size={25} /> */}
        <TouchableOpacity activeOpacity={0.5} onPress={onSubmit}>
          <Feather name="check" color={colors.orange[700]} size={30} />
        </TouchableOpacity>

        {/* <TouchableOpacity activeOpacity={0.5}>
          <Feather name="more-vertical" color={colors.orange[700]} size={25} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
