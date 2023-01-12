import styled from "styled-components/native";

export const Input = styled.TextInput`
  width: 100%;
  border: none;
  outline: none;
  outline-color: transparent;
  background: transparent;
  font-style: normal;
  font-weight: 400px;
  font-size: 15px;
  color: rgb(37, 41, 46);
  text-align: justify;
  margin-left: 10px;
`;

export const InputContainer = styled.View`
  display: flex;
  width: 100%;
  max-width: 350px;
  flex-direction: row;
  border: 1px #dddddd solid;
  padding: 10px 20px;
  border-radius: 10px;
  gap: 20px;
`;
