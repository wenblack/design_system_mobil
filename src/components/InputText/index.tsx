import React from 'react';
import { Input, InputContainer } from './styles';

export function InputText() {
    return (
        <InputContainer>
            <Input
                placeholderTextColor={'gray'}
                placeholder='digite seu email'
            />
        </InputContainer>
    );
}