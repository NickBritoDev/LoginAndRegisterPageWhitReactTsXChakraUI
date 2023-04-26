import { Box, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    label: string;
}

export default function Input({ label, ...rest }: InputProps) {
    return (
        <Box  ml={10} display={"flex"} flexDir={"column"} alignItems={"start"} justifyContent={"center"} w={'350px'}>

            {label}
            <ChakraInput mb={5} {...rest} />
        </Box>
    );
}
