import React from "react";
import { View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";

export function PlusButton({ ...rest }: TouchableOpacityProps) {
  return (
    <View className="absolute bottom-0 right-0 p-4">
      <TouchableOpacity
        activeOpacity={0.5}
        className="bg-orange rounded-full p-2.5"
        {...rest}
      >
        <Feather name="plus" color={"black"} size={30} />
      </TouchableOpacity>
    </View>
  );
}
