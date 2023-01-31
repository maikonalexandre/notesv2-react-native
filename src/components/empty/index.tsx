import { View, Text } from "react-native";

export function Empty() {
  return (
    <View className="flex-1 p-6">
      <Text className="text-zinc-600 font-regular text-lg">Sem notas...</Text>
    </View>
  );
}
