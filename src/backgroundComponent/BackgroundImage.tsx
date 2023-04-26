import { Img } from '@chakra-ui/react'
import backgroundImg from '../../public/background.jpg'

export default function BackgroundImage() {
	return (
		<>
			<Img
				w="100%"
				h="100vh"
				src={backgroundImg}
				alt="Background Image"
			/>
		</>
	)
}
