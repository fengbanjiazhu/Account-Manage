import { Text, Pressable } from "native-base";
import React from "react";
import { DataTypes } from "../types/type";

const TypeButton = ({
  text,
  onPress,
  active,
  last = false,
}: {
  text: DataTypes;
  onPress: React.Dispatch<React.SetStateAction<DataTypes>>;
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
