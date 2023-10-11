import { Text, Pressable } from "native-base";
import React from "react";

const TypeButton = ({
  text,
  onPress,
  active,
  last = false,
}: {
  text: string;
  onPress: React.Dispatch<React.SetStateAction<string>>;
  active: string;
  last?: boolean;
}) => {
  const currentActive = active === text;
  return (
    <Pressable
      fontSize="md"
      borderRightWidth={last ? 0 : 1}
      paddingX={3}
      paddingY={2}
      bgColor={currentActive ? "#0A91B3" : "white"}
      onPress={() => {
        onPress(text);
      }}
    >
      <Text color={currentActive ? "white" : "black"}>{text}</Text>
    </Pressable>
  );
};

export default TypeButton;
