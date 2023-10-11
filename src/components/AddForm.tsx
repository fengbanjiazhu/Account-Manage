import { Input, Box, Text, Button, HStack } from "native-base";
import React, { useState } from "react";
import TypeButton from "./TypeButton";
import LabelInput from "./LabelInput";

const btnTypes = ["Game", "Platform", "Bank", "Others"];

const AddForm = () => {
  const [accountType, setAccountType] = useState("Game");

  return (
    <Box
      bgColor={"white"}
      overflow="hidden"
      borderColor="coolGray.200"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box marginY={2}>
        <Text marginBottom={1} fontSize="md">
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
    </Box>
  );
};

export default AddForm;
