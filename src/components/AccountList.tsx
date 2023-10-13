import { View, SectionList, StyleSheet, Text } from "react-native";
import React from "react";
import { type SectionData, SingleSectionData } from "../types/type";
import { SectionListData } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type SectionHeaderProp = {
  section: SectionListData<
    {
      id: string;
      type: "Game" | "Platform" | "Bank" | "Others";
      name: string;
      account: string;
      password: string;
    },
    SingleSectionData
  >;
};
type iosIconMap = Record<
  string,
  "game-controller-outline" | "musical-notes-outline" | "cash-outline" | "apps-outline"
>;

const iosIconMap: iosIconMap = {
  Game: "game-controller-outline",
  Platform: "musical-notes-outline",
  Bank: "cash-outline",
  Others: "apps-outline",
};

const renderSectionItem = () => {
  return <View></View>;
};
const renderHeader = ({ section }: SectionHeaderProp) => {
  return (
    <View style={styles.groupHeader}>
      <Ionicons name={iosIconMap[section.type]} size={24} color="black" />
      <Text style={styles.typeText}>{section.type}</Text>
    </View>
  );
};

type AccountListProps = {
  sectionData: SectionData;
};

const AccountList = ({ sectionData }: AccountListProps) => {
  return (
    <>
      <SectionList
        sections={sectionData}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={renderSectionItem}
        renderSectionHeader={renderHeader}
        contentContainerStyle={styles.listContainer}
      ></SectionList>
    </>
  );
};

export default AccountList;

const styles = StyleSheet.create({
  groupHeader: {
    width: "100%",
    height: 46,
    backgroundColor: "white",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginTop: 12,
  },
  typeText: {
    fontSize: 16,
    color: "black",
    marginLeft: 16,
  },
  listContainer: {
    paddingHorizontal: 12,
  },
});
