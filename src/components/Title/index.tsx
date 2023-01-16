import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { H1 } from './styles';

interface TitleProps {
    content: string
    style?: StyleProp<TextStyle>
}

export function Title({ content, style }: TitleProps) {
    return (
        <H1 style={style}>{content}</H1>
    );
}