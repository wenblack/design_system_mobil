import React from "react";
import { InputText } from "../../components/InputText";
import { SubTitle } from "../../components/SubTitle";
import { Container } from "./styles";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { ScrollView } from "react-native";
export function FormExample() {
  return (
    <Container >
      <ScrollView>
        <Title content="Cadastro"></Title>
        <SubTitle content="Email/Texto"></SubTitle>
        <InputText type="text" placeholder="Digite seu e-mail"></InputText>
        <SubTitle content="Senha"></SubTitle>
        <InputText type="password" placeholder="Digite seu e-mail"></InputText>
        <SubTitle content="Pin"></SubTitle>
        <InputText type="pin" placeholder="Digite seu código"></InputText>
        <SubTitle content="Botão Default"></SubTitle>
        <Button label="default button" placeholder="Procurar" type="default" ></Button>
        <SubTitle content="Botão de Enviar"></SubTitle>
        <Button label="green button" placeholder="Enviar" type="sucess" ></Button>
        <SubTitle content="Botão de Cancelar"></SubTitle>
        <Button label="cancel button" placeholder="Cancelar" type="cancel" ></Button>
      </ScrollView>
    </Container>
  );
}
