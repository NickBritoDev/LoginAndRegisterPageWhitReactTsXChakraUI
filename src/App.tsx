import {ChakraProvider } from '@chakra-ui/react'
import Layout from './layout/Index'

export default function App() {
  return (
    <ChakraProvider>
      <Layout/>
    </ChakraProvider>
  )
}