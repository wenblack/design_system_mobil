import React from 'react';
import { View } from 'react-native';
import { SimpleText } from '../../components/SimpleText';
import { SubTitle } from '../../components/SubTitle';
import { TextWithBackground } from '../../components/TextWithBackground';
import { Title } from '../../components/Title';


export function TextExample() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: '10%'
        }}>

            <Title content='Título' />
            <SubTitle content='Subtítulo' />
            <SimpleText
                content='
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas, adipisci ea veniam quibusdam maxime ullam in minus illo dolor maiores quam expedita repellendus quo pariatur asperiores corrupti harum voluptatum.'
            />
            <TextWithBackground
                content='
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas, adipisci ea veniam quibusdam maxime ullam in minus illo dolor maiores quam expedita repellendus quo pariatur asperiores corrupti harum voluptatum.'
            />
        </View>
    );
}