import React from "react";
import { Icon } from "../Icon";
import { SubTitle } from "../SubTitle";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  type?: 'default' | 'sucess' | 'cancel';
  placeholder: string;
  label: string
}

export function Button({ type, placeholder, label }: ButtonProps) {



  if (type == 'default') {
    return (
      <ButtonContainer accessibilityLabel={label}>
        <SubTitle style={{ color: 'white' }} content={placeholder} />
      </ButtonContainer >
    );
  }
  if (type == 'sucess') {
    return (
      <ButtonContainer accessibilityLabel={label} style={{ backgroundColor: 'green' }}>
        <SubTitle style={{ color: 'white' }} content={placeholder} />
      </ButtonContainer >
    );
  }
  if (type == 'cancel') {
    return (
      <ButtonContainer accessibilityLabel={label} style={{ backgroundColor: 'red' }}>
        <SubTitle style={{ color: 'white' }} content={placeholder} />
      </ButtonContainer >
    );
  }
  else {
    return (
      <ButtonContainer accessibilityLabel={label}>
        <SubTitle content={placeholder} />
      </ButtonContainer >
    );
  }
}
