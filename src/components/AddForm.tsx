import { Input, Box, Text, Button, HStack, FormControl } from "native-base";
import React, { useState } from "react";
import TypeButton from "./TypeButton";

import { getUUID } from "../utils/UUID";
import { save, load, clearAll } from "../utils/Storage";
import { type AccountData } from "../utils/Storage";

const btnTypes = ["Game", "Platform", "Bank", "Others"];

const AddForm = ({
  onCloseModal,
}: {
  onCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [accountType, setAccountType] = useState("Game");
  const [accountName, setAccountName] = useState("");
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const clearInput = () => {
    setAccountType("Game");
    setPassword("");
    setAccountName("");
    setAccount("");
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
        <Button
          onPress={async () => {
            const id: string = getUUID();
            if (accountName === "" || account === "" || password === "") return;

            const newAccount = {
              id,
              type: accountType,
              name: accountName,
              account,
              password,
            } as AccountData;

            const oldAccountList = await load("accountList");
            if (!oldAccountList) return;

            const newAccountList = [...oldAccountList, newAccount];

            await save("accountList", newAccountList);

            clearInput();
            onCloseModal(false);
          }}
        >
          Save
        </Button>
      </Button.Group>
    </Box>
  );
};

export default AddForm;
