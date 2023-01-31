import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { View, Text, FlatList, AsyncStorage, ToastAndroid } from "react-native";
import { Card } from "../card";
import { Empty } from "../empty";

export interface Note {
  title: string;
  text: string;
  // color: string;
}

interface DataGridProps {
  notes?: Note[];
}

export function DataGrid() {
  const [notes, setNotes] = useState<Note[]>();

  async function getData() {
    const data = await AsyncStorage.getItem("@Notes");
    const newData: Note[] = JSON.parse(data ? data : "");
    setNotes(newData);
  }

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [useCallback])
  );

  async function handleDelete(index: number) {
    const data = await AsyncStorage.getItem("@Notes");
    const previewsNote = JSON.parse(data ? data : "");

    const currentNotes = previewsNote?.filter((e: any, i: any) => {
      return i !== index;
    });

    ToastAndroid.show("Nota deletada!", ToastAndroid.CENTER);

    await AsyncStorage.setItem("@Notes", JSON.stringify(currentNotes));
    setNotes(currentNotes);
  }

  const defaultNote: Note = {
    title: "Minha nota.",
    text: "Este é um exemplo de nota.",
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={notes}
      numColumns={2}
      ListEmptyComponent={<Empty />}
      renderItem={({ item, index }) => {
        return (
          <Card
            key={`${item.title}+${index}`}
            title={item.title}
            text={item.text}
            index={index}
            onDelete={handleDelete}
            // color={item.color}
          />
        );
      }}
    />
  );
}
