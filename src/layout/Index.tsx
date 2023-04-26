import { VStack } from "@chakra-ui/react";
import BackgroundImage from "../backgroundComponent/BackgroundImage";
import { Home } from "../page/home/Index";


export default function Layout() {
	return (
		<VStack>
			<BackgroundImage />
			<Home/>
		</VStack>
	)
}