import {
	Box,
	FormControl,
	Heading
} from '@chakra-ui/react'
import Input from '../components/Input'
import Btn from '../components/Button'

export default function Form() {
	return (
		<Box height={'500px'} borderRadius={'0 12px 12px 0'} bg={'white'} padding={5} >
			<FormControl w={'100%'}>
				<Heading ml={10} mt={10} mb={10}>Login</Heading>
				<Input label="E-mail" type="email" placeholder="Digite seu e-mail" />
				<Input label="Senha" type="password" placeholder="Digite sua senha" />
				<Btn value={'Login'} />
			</FormControl>
		</Box>
	)
}