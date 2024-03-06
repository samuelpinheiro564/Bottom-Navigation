import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View styles={styles.conteiner}>
      <Text>Home </Text>
    </View>
  );
}
