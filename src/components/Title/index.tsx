import React from 'react';
import { H1 } from './styles';

interface TitleProps {
    content: string
}

export function Title({ content }: TitleProps) {
    return (
        <H1>{content}</H1>
    );
}