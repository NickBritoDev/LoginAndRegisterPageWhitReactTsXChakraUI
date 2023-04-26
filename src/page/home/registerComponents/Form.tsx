import {
	Box,
	FormControl,
	Heading
} from '@chakra-ui/react'
import Input from '../components/Input'
import Btn from '../components/Button'

export default function FormRegister() {
	return (
		<Box height={'500px'} borderRadius={'0 12px 12px 0'} bg={'white'} padding={5} >
			<FormControl w={'100%'}>
				<Heading ml={10} mb={5}>Registre-se</Heading>
				<Input label="E-mail" type="email" placeholder="Digite seu e-mail" />
				<Input label="Nome" type="text" placeholder="Digite seu nome completo" />
				<Input label="Senha" type="password" placeholder="Digite uma senha segura" />
				<Input label="Senha" type="password" placeholder="Confirme a senha digitada" />
				<Btn value={'Criar Conta'} />
			</FormControl>
		</Box>
	)
}