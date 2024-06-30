import React from "react";
import { Text } from "react-native";

interface CustomLinkProps {
  title: string;
  href: string;
  onPress: () => void;
}

function CustomLink({ title, onPress }: CustomLinkProps) {
  return (
    <Text
      className="font-bold text-btn-active underline flex text-m"
      // href={href}
      onPress={onPress}>
      {title}
    </Text>
  );
}

export default CustomLink;
