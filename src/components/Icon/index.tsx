import Svg from 'react-native-vector-icons/Ionicons'

import React from 'react';
import { ColorValue } from 'react-native';

interface SvgProps {
    name: string
    size?: number
    color?: number | undefined | ColorValue
}

export function Icon({ name, size, color }: SvgProps) {
    return (
        <Svg name={name} size={size} color={color} />
    );
}