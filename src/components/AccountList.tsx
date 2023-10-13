import { View, SectionList, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { type SectionData, SingleSectionData, AccountData } from "../types/type";
import { SectionListData } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

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

type RenderSectionItemProp = {
  item: AccountData;
  index: number;
} & SectionHeaderProp;

const renderSectionItem = ({ item, index, section }: RenderSectionItemProp) => {
  return (
    <View style={styles.itemLayout}>
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={styles.contentLayout}>
        <Text style={styles.itemContent}>{`Account:  ${item.account}`}</Text>
        <Text style={styles.itemContent}>{`Password:  ${item.password}`}</Text>
      </View>
    </View>
  );
};

const renderHeader = ({ section }: SectionHeaderProp) => {
  return (
    <View style={styles.groupHeader}>
      <Ionicons name={iosIconMap[section.type]} size={24} color="black" />
      <Text style={styles.typeText}>{section.type}</Text>

      <TouchableOpacity style={styles.arrowButton}>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

type AccountListProps = {
  sectionData: SectionData;
};

const AccountList = ({ sectionData }: AccountListProps) => {
  return (
    <SectionList
      style={{ width: "100%" }}
      sections={sectionData}
      keyExtractor={(item, index) => `${item}-${index}`}
      renderItem={renderSectionItem}
      renderSectionHeader={renderHeader}
      contentContainerStyle={styles.listContainer}
    ></SectionList>
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
  arrowButton: {
    position: "absolute",
    right: 0,
    padding: 16,
  },
  itemLayout: {
    width: "100%",
    flexDirection: "column",
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  itemName: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  contentLayout: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  itemContent: {
    flex: 1,
    fontSize: 14,
    color: "#666666",
    marginTop: 12,
    marginBottom: 4,
  },
});
