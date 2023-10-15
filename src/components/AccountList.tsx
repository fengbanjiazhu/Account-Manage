import {
  View,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
import React, { useState } from "react";
import { type SectionData, SingleSectionData, AccountData } from "../types/type";
import { SectionListData } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ModalForm from "./ModalForm";

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

type RenderSectionItemProp = {
  item: AccountData;
  index: number;
} & SectionHeaderProp;

type AccountListProps = {
  sectionData: SectionData;
  onSave: React.Dispatch<React.SetStateAction<[] | SectionData>>;
};

const iosIconMap: iosIconMap = {
  Game: "game-controller-outline",
  Platform: "musical-notes-outline",
  Bank: "cash-outline",
  Others: "apps-outline",
};

const AccountList = ({ sectionData, onSave }: AccountListProps) => {
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState<AccountData | undefined>(undefined);

  const [sectionState, setSectionState] = useState({
    Game: true,
    Platform: true,
    Bank: true,
    Others: true,
  });

  const renderHeader = ({ section }: SectionHeaderProp) => {
    const { type } = section;
    const sectionDataLength = section.data.length > 0;
    const currentSectionState = sectionState[type];

    const pressHandler = () => {
      const copyState = { ...sectionState };
      copyState[type] = !copyState[type];
      LayoutAnimation.easeInEaseOut();
      setSectionState(copyState);
    };

    return (
      <View
        style={[
          styles.groupHeader,
          { borderBottomLeftRadius: sectionDataLength && currentSectionState ? 0 : 12 },
          { borderBottomRightRadius: sectionDataLength && currentSectionState ? 0 : 12 },
        ]}
      >
        <Ionicons name={iosIconMap[type]} size={24} color="black" />
        <Text style={styles.typeText}>{type}</Text>

        <TouchableOpacity style={styles.arrowButton} onPress={pressHandler}>
          <MaterialIcons
            name={currentSectionState ? "keyboard-arrow-down" : "keyboard-arrow-right"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderSectionItem = ({ item, index, section }: RenderSectionItemProp) => {
    if (!sectionState[section.type]) return null;
    const handlePress = function () {
      setEditData(item);
      setShowForm(true);
    };

    return (
      <TouchableOpacity style={styles.itemLayout} onPress={handlePress}>
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.contentLayout}>
          <Text style={styles.itemContent}>{`Account:  ${item.account}`}</Text>
          <Text style={styles.itemContent}>{`Password:  ${item.password}`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <SectionList
        style={{ width: "100%" }}
        sections={sectionData}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={renderSectionItem}
        renderSectionHeader={renderHeader}
        contentContainerStyle={styles.listContainer}
      ></SectionList>

      <ModalForm
        modalVisible={showForm}
        setModalVisible={setShowForm}
        onSave={onSave}
        onEdit={editData}
      />
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
