import React from "react";
import { InputText } from "../../components/InputText";
import { SubTitle } from "../../components/SubTitle";
import { Container } from "./styles";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
export function FormExample() {
  return (
    <Container>
      <Title content="Cadastro"></Title>
      <SubTitle content="Email/Texto"></SubTitle>
      <InputText type="text" placeholder="Digite seu e-mail"></InputText>
      <SubTitle content="Senha"></SubTitle>
      <InputText type="password" placeholder="Digite seu e-mail"></InputText>
      <SubTitle content="Pin"></SubTitle>
      <InputText type="pin" placeholder="Digite seu código"></InputText>
      <Button placeholder='Enviar' type="search" />
    </Container>
  );
}
