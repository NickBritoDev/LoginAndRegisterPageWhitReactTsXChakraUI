import { Box, Text, Skeleton, Stack, Spinner } from "@chakra-ui/react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { HeadingText } from "./components/Heading";
import { useState } from "react";
import FormLogin from "./loginComponents/Form";
import FormRegister from "./registerComponents/Form";

export function Home() {
    const [rotate, setRotate] = useState(false)
    const [showLogin, setShowLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleClickRotate = () => {
        setIsLoading(true); 
        setRotate(!rotate);
        setTimeout(() => {
            setShowLogin(!showLogin);
            setIsLoading(false); 
        }, 300);
    };

    return (
        <Box pos={"fixed"}>
            <Box
                boxShadow={"2xl"}
                height={'500px'}
                borderRadius={12}
                display={"flex"}
                margin={'25% auto'}
                alignItems={"center"}
                justifyContent={"center"}
                w={'900px'}>
                <Box
                    color={'#fff'}
                    textAlign={"center"}
                    borderRadius={'12px 0px 0px 12px'}
                    height={'100%'}
                    position={"relative"}
                    bg={"#004eb2"}
                    w={'40%'}>
                    <Box margin={'230px auto'}>
                        {isLoading ? (
                            <Spinner w={'80px'} h={'80px'} />
                        ) : (
                            showLogin ?
                                <HeadingText value={'Registre-se'} />
                                :
                                <Box>
                                    <Text fontSize={22} fontWeight={"bold"} mt={'-130px'}>Crie sua Conta Agora Mesmo</Text>
                                    <Text ml={'-10px'} textAlign={"justify"} p={10}>
                                        Ao criar uma conta em nosso site, você terá acesso a recursos exclusivos, poderá personalizar sua experiência de navegação e terá a oportunidade de interagir com outras pessoas na comunidade. Não perca tempo e crie sua conta agora mesmo!
                                    </Text>
                                </Box>
                            )}
                    </Box>
                </Box>
                <Box
                    _hover={{ w: "72px", h: "72px" }}
                    cursor={"pointer"}
                    color={"#fff"}
                    fontSize={40}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    textAlign={"center"}
                    bg={"#004eb2"}
                    borderRadius={"50%"}
                    boxShadow={"lg"}
                    w={"70px"}
                    h={"70px"}
                    left={"36%"}
                    zIndex={10}
                    position={"absolute"}
                    onClick={handleClickRotate}
                    transform={`rotate(${rotate ? 360 : 0}deg)`}
                    transition={"transform 0.3s ease"}
                >
                    <FaAngleDoubleRight />
                </Box>
                <Box position={"relative"} w={'60%'} transition={'ease-in-out 0.6s'}>
                    {isLoading ? (
                        <Stack h={'500px'}>
                            <Skeleton height='25px' />
                            <Skeleton height='25px' />
                            <Skeleton height='25px' />
                            <Skeleton height='25px' />
                            <Skeleton height='25px' />
                            <Skeleton height='25px' />
                            <Skeleton height='25px' />
                            <Skeleton height='25px' />
                            <Skeleton height='25px' />
                            <Skeleton height='25px' />
                            <Skeleton height='25px' />
                            <Skeleton height='25px' />
                            <Skeleton height='25px' />
                            <Skeleton height='25px' />
                            <Skeleton height='25px' />
                            <Skeleton height='25px' />
                            <Skeleton height='25px' />
                        </Stack>
                    ) : (
                        showLogin ? <FormLogin /> : <FormRegister />
                    )}
                </Box>
            </Box>
        </Box >
    )
}
