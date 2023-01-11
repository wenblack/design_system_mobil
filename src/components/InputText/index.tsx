import React from 'react';
import { Icon } from '../Icon';
import { Input, InputContainer } from './styles';

export function InputText() {
    return (
        <InputContainer>
            <Icon name='mail' size={18} color={'orange'}></Icon>
            <Input
                placeholderTextColor={'gray'}
                placeholder='digite seu email'
            />
        </InputContainer>
    );
}