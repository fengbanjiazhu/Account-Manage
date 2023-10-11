import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { IconButton } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import ModalForm from "../components/ModalForm";

const Home = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <View style={styles.root}>
      <ModalForm modalVisible={openForm} setModalVisible={setOpenForm} />
      <IconButton
        onPress={() => {
          setOpenForm(!openForm);
        }}
        style={{ position: "absolute", right: 4, bottom: 10 }}
        borderRadius="full"
        icon={<Ionicons name="md-add-circle-outline" size={48} color="black" />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
