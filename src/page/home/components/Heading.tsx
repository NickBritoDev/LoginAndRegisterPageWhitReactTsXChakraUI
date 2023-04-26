import { Heading, HeadingProps } from "@chakra-ui/react";

interface TextProps extends HeadingProps {
    value: string
}


export function HeadingText({value}: TextProps) {
    return (
        <Heading  >{value}</Heading>
    )
}