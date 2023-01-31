import { View, Text, AsyncStorage } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DataGrid } from "../components/dataGrid";
import { PlusButton } from "../components/plusButton";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";

export interface Note {
  title: string;
  text: string;
  // color: string;
}

export function Home() {
  const navigation = useNavigation();

  
  function gotoCreate() {
    navigation.navigate("create");
  }

  return (
    <SafeAreaView className="bg-background flex-1 relative px-1">
      <DataGrid  />
      <PlusButton onPress={gotoCreate} />
    </SafeAreaView>
  );
}
