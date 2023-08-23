import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export const HeaderComponent = () => {
  return (
    <View style={styles.mainBlock}>
      <Text style={styles.text}>Перелік справ</Text>
    </View>
  );
};

export default HeaderComponent;
