import React from 'react'
import { InputText } from '../../components/InputText'
import { SubTitle } from '../../components/SubTitle'
import { Container } from './styles'
import { Title } from '../../components/Title'
import { Button } from '../../components/Button'
import { ScrollView, StatusBar, StyleProp, ViewStyle } from 'react-native'

interface styleProps {
	style?: StyleProp<ViewStyle>
	fontTitle: string
	fontSubtitle: string
	fontButton: string
}
export function FormExample({ style, fontButton, fontSubtitle, fontTitle }: styleProps) {
	return (
		<Container style={style}>
			<StatusBar
				barStyle={'dark-content'}
				translucent
			></StatusBar>
			<ScrollView>
				<Title fontTitle={fontTitle} content='Cadastro'></Title>
				<SubTitle fontSubtitle={fontSubtitle} content='Email/Texto'></SubTitle>
				<InputText
					type='text'
					placeholder='Digite seu e-mail'
					inputFont={fontSubtitle}
				></InputText>
				<SubTitle fontSubtitle={fontSubtitle} content='Senha'></SubTitle>
				<InputText
					type='password'
					placeholder='Digite seu e-mail'
					inputFont={fontSubtitle}
				></InputText>
				<SubTitle fontSubtitle={fontSubtitle} content='Pin'></SubTitle>
				<InputText
					type='pin'
					placeholder='Digite seu código'
					inputFont={fontSubtitle}
				></InputText>
				<SubTitle fontSubtitle={fontSubtitle} content='Botão Default'></SubTitle>
				<Button
					label='default button'
					placeholder='Procurar'
					type='default'
					fontButton={fontButton}
				></Button>
				<SubTitle fontSubtitle={fontSubtitle} content='Botão de Enviar'></SubTitle>
				<Button
					label='green button'
					placeholder='Enviar'
					type='sucess'
					fontButton={fontButton}
				></Button>
				<SubTitle fontSubtitle={fontSubtitle} content='Botão de Cancelar'></SubTitle>
				<Button
					label='cancel button'
					placeholder='Cancelar'
					type='cancel'
					fontButton={fontButton}
				></Button>
			</ScrollView>
		</Container>
	)
}
