import { View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { IconButton } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { load } from "../utils/Storage";

import ModalForm from "../components/ModalForm";
import AccountList from "../components/AccountList";

import { dataSorter } from "../utils/helper";
import { type AccountData } from "../types/type";

type SectionData = {
  type: "Game" | "Platform" | "Bank" | "Others";
  data: AccountData[] | [];
}[];

const Home = () => {
  const [openForm, setOpenForm] = useState(false);
  const [sectionData, setSectionData] = useState<SectionData | []>([]);

  useEffect(() => {
    const getAllData = async () => {
      const allData = await load("accountList");
      if (!allData) return;
      const filteredData: SectionData = [
        { type: "Game", data: dataSorter(allData, "Game") },
        { type: "Platform", data: dataSorter(allData, "Platform") },
        { type: "Bank", data: dataSorter(allData, "Bank") },
        { type: "Others", data: dataSorter(allData, "Others") },
      ];
      setSectionData(filteredData);
    };

    getAllData();
  }, []);

  return (
    <View style={styles.root}>
      <AccountList sectionData={sectionData} />

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
