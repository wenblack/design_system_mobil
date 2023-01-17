import React from 'react';
import { ColorValue } from 'react-native';
import { Text } from './styles';

interface TextWithBackgroundProps {
    content: string,
    color?: ColorValue
    fontText: string
    background: ColorValue
}

export function TextWithBackground({ content, fontText, color, background }: TextWithBackgroundProps) {
    return (
        <Text
            style={{
                color: color,
                fontFamily: fontText,
                backgroundColor: background
            }}
        >{content}</Text>
    );
}