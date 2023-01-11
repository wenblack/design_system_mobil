import React from 'react';
import { H2 } from './styles';

interface SubTitleProps {
    content: string
}

export function SubTitle({ content }: SubTitleProps) {
    return (
        <H2>{content}</H2>
    );
}