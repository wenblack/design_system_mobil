import React from "react";
import { Icon } from "../Icon";
import { Touchable, ButtonContainer } from "./styles";

interface ButtonProps {
  type: 'send' | 'search' | 'none';
  placeholder: string;
}

export function Button({ type, placeholder }: ButtonProps) {
  if (type == 'send') {
    return (
      <ButtonContainer>
        <Icon name={"send"} size={18} color={"gray"}></Icon>
        <Touchable>{placeholder}</Touchable>
      </ButtonContainer>
    );
  }
  if (type == 'search') {
    return (
      <ButtonContainer>
        <Icon name={"search"} size={18} color={"gray"}></Icon>
        <Touchable>{placeholder}</Touchable>
      </ButtonContainer>
    );
  }
  if (type == 'none') {
    return (
      <ButtonContainer>
        <Touchable>{placeholder}</Touchable>
      </ButtonContainer>
    );
  }
}
