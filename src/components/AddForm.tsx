import { Input, Box, Text, Button, HStack, FormControl } from "native-base";
import React, { useEffect, useState } from "react";
import TypeButton from "./TypeButton";

import { getUUID } from "../utils/UUID";
import { save, load } from "../utils/Storage";
import { type AccountData, SectionData, DataTypes } from "../types/type";
import { getAndFilterData } from "../utils/helper";

const btnTypes: DataTypes[] = ["Game", "Platform", "Bank", "Others"];

const AddForm = ({
  onCloseModal,
  onUpdateData,
  onEdit,
}: {
  onCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
  onUpdateData: React.Dispatch<React.SetStateAction<[] | SectionData>>;
  onEdit?: AccountData;
}) => {
  const [accountType, setAccountType] = useState<DataTypes>("Game");
  const [accountName, setAccountName] = useState("");
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");

  const updating = onEdit !== undefined;

  useEffect(() => {
    if (!onEdit) return;

    const { account, name, password, type, id } = onEdit;
    setPassword(password);
    setAccountName(name);
    setAccount(account);
    setAccountType(type);
    setId(id);
  }, [onEdit]);

  const clearInput = () => {
    setAccountType("Game");
    setPassword("");
    setAccountName("");
    setAccount("");
  };

  const handleSaving = async () => {
    // If creating, set a new id
    if (!updating) setId(getUUID());

    if (accountName === "" || account === "" || password === "" || id === "") return;

    const newAccount: AccountData = {
      id,
      type: accountType,
      name: accountName,
      account,
      password,
    };

    const allAccountList = await load("accountList");
    if (!allAccountList) return;

    const oldAccountList = allAccountList.filter((account) => account.id !== id);
    const newAccountList = [...oldAccountList, newAccount];
    await save("accountList", newAccountList);

    // update view
    const filteredData = await getAndFilterData();
    if (!filteredData) return;
    onUpdateData(filteredData);

    // clear input & close modal
    clearInput();
    onCloseModal(false);
  };

  return (
    <Box
      bgColor={"white"}
      overflow="hidden"
      borderColor="coolGray.200"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box marginY={2}>
        <Text marginBottom={1} fontSize="sm" color={"gray.500"}>
          Types
        </Text>
        <HStack
          maxW="350"
          alignItems={"center"}
          justifyContent={"center"}
          borderWidth={1}
          borderRadius={3}
        >
          {btnTypes.map((type, index) => {
            return (
              <TypeButton
                text={type}
                key={type}
                onPress={setAccountType}
                active={accountType}
                last={index === btnTypes.length - 1}
              />
            );
          })}
        </HStack>
      </Box>

      <FormControl isRequired padding={1} marginBottom={4}>
        <FormControl.Label>Name</FormControl.Label>
        <Input onChangeText={setAccountName} value={accountName} bgColor={"gray.100"}></Input>

        <FormControl.Label>Account</FormControl.Label>
        <Input onChangeText={setAccount} value={account} bgColor={"gray.100"}></Input>

        <FormControl.Label>Password</FormControl.Label>
        <Input onChangeText={setPassword} value={password} bgColor={"gray.100"}></Input>
      </FormControl>

      <Button.Group space={2}>
        <Button
          variant="ghost"
          colorScheme="blueGray"
          onPress={() => {
            onCloseModal(false);
          }}
        >
          Cancel
        </Button>

        <Button onPress={handleSaving}>{updating ? "Save" : "Update"}</Button>
      </Button.Group>
    </Box>
  );
};

export default AddForm;
