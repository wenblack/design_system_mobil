import React from 'react'
import { InputText } from '../../components/InputText'
import { SubTitle } from '../../components/SubTitle'
import { Container } from './styles'
import { Title } from '../../components/Title'
import { Button } from '../../components/Button'
import { ScrollView, StatusBar, StyleProp, ViewStyle } from 'react-native'

interface styleProps {
	style?: StyleProp<ViewStyle>
	font: string
}
export function FormExample({ style, font }: styleProps) {
	return (
		<Container style={style}>
			<StatusBar
				barStyle={'dark-content'}
				translucent
			></StatusBar>
			<ScrollView>
				<Title content='Cadastro'></Title>
				<SubTitle content='Email/Texto'></SubTitle>
				<InputText
					type='text'
					placeholder='Digite seu e-mail'
					fontstyle={font}
				></InputText>
				<SubTitle content='Senha'></SubTitle>
				<InputText
					type='password'
					placeholder='Digite seu e-mail'
					fontstyle={font}
				></InputText>
				<SubTitle content='Pin'></SubTitle>
				<InputText
					type='pin'
					placeholder='Digite seu código'
					fontstyle={font}
				></InputText>
				<SubTitle content='Botão Default'></SubTitle>
				<Button
					label='default button'
					placeholder='Procurar'
					type='default'
					fontStyle={font}
				></Button>
				<SubTitle content='Botão de Enviar'></SubTitle>
				<Button
					label='green button'
					placeholder='Enviar'
					type='sucess'
					fontStyle={font}
				></Button>
				<SubTitle content='Botão de Cancelar'></SubTitle>
				<Button
					label='cancel button'
					placeholder='Cancelar'
					type='cancel'
					fontStyle={font}
				></Button>
			</ScrollView>
		</Container>
	)
}
