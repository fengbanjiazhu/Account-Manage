import { Input, Box, Text, Button, HStack, Pressable } from "native-base";

import React from "react";

const TypeButton = ({ text, index, last }: { text: string; index: number; last?: boolean }) => {
  return (
    <Pressable
      fontSize="md"
      minW={36}
      borderRightWidth={last ? 0 : 1}
      padding={2}
      onPress={() => {
        console.log(`pressed:`, text);
      }}
    >
      <Text>{text}</Text>
    </Pressable>
  );
};

export default TypeButton;
