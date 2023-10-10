import { Input, Box, Text, Button, HStack } from "native-base";
import React, { useState } from "react";
import TypeButton from "./TypeButton";
import LabelInput from "./LabelInput";

const AddForm = () => {
  const [accountType, setAccountType] = useState("Game");

  return (
    <Box
      maxW="400"
      rounded="lg"
      bgColor={"white"}
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box marginY={2}>
        <Text marginBottom={1} fontSize="md">
          Types
        </Text>
        <HStack
          maxW="380"
          alignItems={"center"}
          justifyContent={"center"}
          borderWidth={1}
          borderRadius={5}
        >
          <TypeButton text={"Games"} key={"Games"} onPress={setAccountType} active={accountType} />
          <TypeButton
            text={"Platform"}
            key={"Platform"}
            onPress={setAccountType}
            active={accountType}
          />
          <TypeButton text={"Bank"} key={"Bank"} onPress={setAccountType} active={accountType} />
          <TypeButton
            text={"Others"}
            key={"Others"}
            last={true}
            onPress={setAccountType}
            active={accountType}
          />
        </HStack>
      </Box>

      <LabelInput
        label="Account Name"
        onChange={() => {
          console.log("first");
        }}
      />
      <LabelInput
        label="Account Number"
        onChange={() => {
          console.log("first");
        }}
      />
      <LabelInput
        label="Account Password"
        onChange={() => {
          console.log("first");
        }}
      />

      <Box marginY={2} alignItems={"center"}>
        <Button w="300">Save</Button>
      </Box>
    </Box>
  );
};

export default AddForm;
