import { Box, Text, Input, FormControl } from "native-base";
import React from "react";

type labelInputProps = {
  label: string;
  onChange: () => void;
};
const LabelInput = ({ label, onChange }: labelInputProps) => {
  return (
    <Box marginBottom={2}>
      <FormControl>
        <FormControl.Label paddingX={4}>{label}</FormControl.Label>
        <Input mx="4" w="280" bgColor={"gray.200"} onChangeText={onChange}></Input>
      </FormControl>
    </Box>
  );
};

export default LabelInput;
