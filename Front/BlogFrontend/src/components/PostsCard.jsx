import React from "react"
import { Card, CardHeader, CardBody, CardFooter, Text ,Heading, Box} from '@chakra-ui/react'


export const CardsPosts =({title,description,course,comments,creationDate})=> {
  return (
    <>
    <Box padding="4"
            bg="blue.400"
            color="black"
            marginTop='5px'
            borderRadius="lg"
            boxShadow="lg"
            >
<Card>
    <CardHeader>
      <Heading size='md'> {title}</Heading>
    </CardHeader>
    <CardBody>
      <Text>{description}</Text>
    </CardBody>
    <CardFooter>
      <Text>{course}</Text>
    </CardFooter>
    <CardFooter>
      <h1>Fecha</h1>
      <Text>{creationDate}</Text>
    </CardFooter>
  </Card>
  </Box>
    </>
  );
  
}

