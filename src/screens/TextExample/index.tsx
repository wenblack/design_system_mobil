import React from 'react';
import { View } from 'react-native';
import { SimpleText } from '../../components/SimpleText';
import { SubTitle } from '../../components/SubTitle';
import { TextWithBackground } from '../../components/TextWithBackground';
import { Title } from '../../components/Title';

interface TextProps {
    fontText: string
    fontTitle: string
    fontSubtitle: string
}

export function TextExample({ fontSubtitle, fontText, fontTitle }: TextProps) {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: '10%'
        }}>

            <Title fontTitle={fontTitle} content='Título' />
            <SubTitle fontSubtitle={fontSubtitle} content='Subtítulo' />
            <SimpleText
                textFont={fontText}
                content='
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas, adipisci ea veniam quibusdam maxime ullam in minus illo dolor maiores quam expedita repellendus quo pariatur asperiores corrupti harum voluptatum.'
            />
            <TextWithBackground
                fontText={fontText}
                background='gray'
                content='
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas, adipisci ea veniam quibusdam maxime ullam in minus illo dolor maiores quam expedita repellendus quo pariatur asperiores corrupti harum voluptatum.'
            />
        </View>
    );
}