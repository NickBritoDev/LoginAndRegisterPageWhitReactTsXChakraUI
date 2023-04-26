import { Button, ButtonProps } from '@chakra-ui/react'

interface BtnProps extends ButtonProps {
    value: string;
}

export default function Btn({ value }: BtnProps) {
    return (
            <Button _hover={{bg: '#004eb2', color: '#fff', transition: '0.3s', boxShadow: '2xl'}} mt={5} ml={10}  paddingInline={10} >{value}</Button>
    )
}