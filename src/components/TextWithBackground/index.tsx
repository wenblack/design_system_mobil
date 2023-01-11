import React from 'react';
import { TextStyle } from 'react-native';
import { StyledProps } from 'styled-components';
import { Text } from './styles';

interface TextWithBackgroundProps {
    content: string,
    style?: StyledProps<TextStyle>
}

export function TextWithBackground({ content, style }: TextWithBackgroundProps) {
    return (
        <Text
            style={style}
        >{content}</Text>
    );
}