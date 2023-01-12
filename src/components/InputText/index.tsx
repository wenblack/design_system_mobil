import React from "react";
import { Icon } from "../Icon";
import { Input, InputContainer } from "./styles";

interface inputProps {
  type: "text" | "password" | "pin";
  placeholder: string;
}

export function InputText({ type, placeholder }: inputProps) {
  if (type == "text") {
    return (
      <InputContainer>
        <Icon name={"mail"} size={18} color={"gray"}></Icon>
        <Input
          placeholderTextColor={"gray"}
          placeholder={placeholder}
          keyboardType="email-address"
          autoComplete="email"
          secureTextEntry={false}
        />
      </InputContainer>
    );
  }
  if (type == "password") {
    return (
      <InputContainer>
        <Icon name={"lock-closed"} size={18} color={"gray"}></Icon>
        <Input
          placeholderTextColor={"gray"}
          placeholder={placeholder}
          keyboardType="email-address"
          secureTextEntry={true}
        />
      </InputContainer>
    );
  }
  if (type == "pin") {
    return (
      <InputContainer>
        <Icon name={"apps"} size={18} color={"gray"}></Icon>
        <Input
          placeholderTextColor={"gray"}
          placeholder={placeholder}
          keyboardType="numeric"
          secureTextEntry={true}
          keyboardAppearance="dark"
        />
      </InputContainer>
    );
  }
}
