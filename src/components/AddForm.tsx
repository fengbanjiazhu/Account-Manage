import { Input, Box, Text, Button, HStack } from "native-base";
import React from "react";
import TypeButton from "./TypeButton";

const types = ["Game", "Platform", "Bank", "Others"];

const AddForm = () => {
  return (
    <Box alignItems="center">
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
        <HStack
          maxW="350"
          alignItems={"center"}
          justifyContent={"center"}
          borderWidth={1}
          marginY={2}
          borderRadius={5}
        >
          {types.map((type, index) => {
            return (
              <TypeButton text={type} key={index} index={index} last={index === types.length - 1} />
            );
          })}
        </HStack>
        <Box marginBottom={2}>
          <Text fontSize="md" marginLeft={4}>
            Account Name
          </Text>
          <Input mx="4" w="300" bgColor={"gray.200"}></Input>
        </Box>
        <Box marginBottom={2}>
          <Text fontSize="md" marginLeft={4}>
            Account Number
          </Text>
          <Input mx="4" w="300" bgColor={"gray.200"}></Input>
        </Box>
        <Box marginBottom={2}>
          <Text fontSize="md" marginLeft={4}>
            Account Password
          </Text>
          <Input mx="4" w="300" bgColor={"gray.200"}></Input>
        </Box>

        <Box marginBottom={2} alignItems={"center"}>
          <Button w="300">Save</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddForm;
