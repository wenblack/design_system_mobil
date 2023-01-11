import React from 'react';
import { Text } from './styles';

interface SimpleTextProps {
    content: string
}

export function SimpleText({ content }: SimpleTextProps) {
    return (
        <Text>{content}</Text>
    );
}