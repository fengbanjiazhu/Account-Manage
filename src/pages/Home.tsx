import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import AddForm from "../components/AddForm";

const Home = () => {
  return (
    <View style={styles.root}>
      <Text>Home</Text>
      <AddForm />
      <Ionicons name="md-add-circle-outline" size={48} color="black" />
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
  },
});
