import { useState } from 'react'
import { Container,Box,VStack,Heading,useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    Image: ""
  })
  return (
    <Container maxW={"Container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2x1"} textalign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box w={"full"} bg={useColorModeValue("white","green.800")}
        p={6} rounded={"lg"} shadow={"md"}>
          <VStack spacing={4}>
            <Input placeholder='Product Name' 
            name='name' value
            />
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage