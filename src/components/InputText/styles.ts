import styled from 'styled-components/native';

export const Input = styled.TextInput`
  width: 100%;
  border: none;
  outline: none;
  outline-color: transparent;
  background: transparent;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15;
  color: rgb(37,41,46);
  text-align: justify;
`;

export const InputContainer = styled.KeyboardAvoidingView`
    width: 100%;
    max-width: 350;
    flex-direction: row;
    border: 1px #DDDDDD solid;
    padding-block:10;
    padding-inline:20;
    border-radius: 10;
    gap: 20;

`