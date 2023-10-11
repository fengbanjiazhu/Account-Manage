import { Input, Box, Text, Button, HStack, FormControl } from "native-base";
import React, { useState } from "react";
import TypeButton from "./TypeButton";

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

      <FormControl padding={1} marginBottom={4}>
        <FormControl.Label>Name</FormControl.Label>
        <Input onChangeText={setAccountName} bgColor={"gray.100"}></Input>

        <FormControl.Label>Account</FormControl.Label>
        <Input onChangeText={setAccount} bgColor={"gray.100"}></Input>

        <FormControl.Label>Password</FormControl.Label>
        <Input onChangeText={setPassword} bgColor={"gray.100"}></Input>
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
          onPress={() => {
            console.log(accountType, accountName, account, password);
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
