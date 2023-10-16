import { View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import type { StackNavigationProp } from "@react-navigation/stack";
import { IconButton } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import ModalForm from "../components/ModalForm";
import AccountList from "../components/AccountList";

import { getAndFilterData } from "../utils/helper";

import { type SectionData } from "../types/type";

type RootStackParamList = {
  Home: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const Home = ({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  const [openForm, setOpenForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [sectionData, setSectionData] = useState<SectionData | []>([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={() => {
            setShowPassword(!showPassword);
          }}
          marginRight={2}
          borderRadius="full"
          icon={
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={24}
              color="black"
            />
          }
        />
      ),
    });
  }, [navigation, showPassword]);

  useEffect(() => {
    const getAllData = async () => {
      const filteredData = await getAndFilterData();
      if (!filteredData) return;

      setSectionData(filteredData);
    };

    getAllData();
  }, []);

  return (
    <View style={styles.root}>
      <AccountList sectionData={sectionData} onSave={setSectionData} showPassword={showPassword} />

      <ModalForm modalVisible={openForm} setModalVisible={setOpenForm} onSave={setSectionData} />

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
