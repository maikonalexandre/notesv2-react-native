import React from "react";
import { View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

export function DeleteButton({ ...rest }: TouchableOpacityProps) {
  return (
    <View className="items-end fixed ">
      <TouchableOpacity
        activeOpacity={0.2}
        {...rest}
        className="rounded-full p-1"
      >
        <Feather name="trash" color={colors.orange[900]} size={20} />
      </TouchableOpacity>
    </View>
  );
}
