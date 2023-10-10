import { Box, Text, Input } from "native-base";
import React from "react";

type labelInputProps = {
  label: string;
  onChange: () => void;
};
const LabelInput = ({ label, onChange }: labelInputProps) => {
  return (
    <Box marginBottom={2}>
      <Text fontSize="md" marginLeft={4}>
        {label}
      </Text>
      <Input mx="4" w="300" bgColor={"gray.200"} onChangeText={onChange}></Input>
    </Box>
  );
};

export default LabelInput;
