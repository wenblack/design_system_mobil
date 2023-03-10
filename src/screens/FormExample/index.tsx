import React from 'react'
import { InputText } from '../../components/InputText'
import { SubTitle } from '../../components/SubTitle'
import { Container } from './styles'
import { Title } from '../../components/Title'
import { Button } from '../../components/Button'
import { ScrollView } from 'react-native'

interface styleProps {
	fontTitle: string
	fontSubtitle: string
	fontButton: string
	fontInput: string
}
export function FormExample({ fontButton, fontSubtitle, fontTitle, fontInput }: styleProps) {
	return (
		<Container >
			<ScrollView>
				<Title fontTitle={fontTitle} content='Cadastro'></Title>
				<SubTitle fontSubtitle={fontSubtitle} content='Email/Texto'></SubTitle>
				<InputText
					type='text'
					placeholder='Digite seu e-mail'
					inputFont={fontInput}
				></InputText>
				<SubTitle fontSubtitle={fontSubtitle} content='Senha'></SubTitle>
				<InputText
					type='password'
					placeholder='Digite seu e-mail'
					inputFont={fontInput}
				></InputText>
				<SubTitle fontSubtitle={fontSubtitle} content='Pin'></SubTitle>
				<InputText
					type='pin'
					placeholder='Digite seu código'
					inputFont={fontInput}
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
