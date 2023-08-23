import { useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import HeaderComponent from "./src/component/header/HeaderComponent";
import ListItemComponent from "./src/component/listItem/ListItemComponent";
import FormComponent from "./src/component/form/FormComponent";

const App = () => {
  const [listOfItems, setListOfItems] = useState([
    { text: "Купити молоко", key: "1" },
    { text: "Купити Фрукти", key: "2" },
    { text: "Купити хліб", key: "3" },
    { text: "Купити води", key: "4" },
  ]);
  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list,
      ];
    });
  };
  const deleteHendler = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItems) => listOfItems.key != key);
    });
  };
  return (
    <View style={styles.mainBlock}>
      <HeaderComponent />
      <FormComponent addHandler={addHandler} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItemComponent deleteHendler={deleteHendler} el={item} />
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default App;
