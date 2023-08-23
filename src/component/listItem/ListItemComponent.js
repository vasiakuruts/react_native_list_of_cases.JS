import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const ListItemComponent = (props) => {
  const { el, deleteHendler } = props;
  return (
    <TouchableOpacity onPress={() => deleteHendler(el.key)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
};

export default ListItemComponent;
