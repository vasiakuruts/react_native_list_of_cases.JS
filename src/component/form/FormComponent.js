import React, { useState } from "react";
import {
  View,
  Button,
  TextInput,
} from "react-native";
import { styles } from "./styles";

export const FormComponent = ({ addHandler }) => {
  const [text, setValue] = useState("");
  const onChange = (text) => {
    setValue(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Введіть завдання"
      />
      <Button
        color="green"
        title="Додати завдання"
        onPress={() => addHandler(text)}
      />
    </View>
  );
};

export default FormComponent;
