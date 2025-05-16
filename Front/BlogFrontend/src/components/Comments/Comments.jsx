import React from "react"
import { useForm } from 'react-hook-form'
import {
  Card,
  CardBody,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input
} from '@chakra-ui/react'

export const Comments=({postId ,onSubmitForm})=> {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  
  const  {
    register,
    handleSubmit,
    formState: { errors }
} = useForm({
    mode: 'onTouched',
    defaultValues: {
        postId:postId,
        name: '',
        content: ''
    }
})
const addComment = (data)=>{
  //hook personalizado
  //addPost
  onSubmitForm(data)
}
  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        AddComment
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        onSubmit = {handleSubmit(addComment)}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Coloca Tu nombre </DrawerHeader>
          <DrawerBody>
          <form onSubmit={handleSubmit(addComment)}>

            <Input
              placeholder="Nombre..."
              {...register('name', { required: 'El nombre es obligatorio' })}
            />
            {errors.name && <p>{errors.name.message}</p>}
            <br />

           
            <Input
              placeholder="Comentario..."
              {...register('content', { required: 'El comentario es obligatorio', minLength: '10' })}
            />
            {errors.content && <p>{errors.content.message}</p>}
            <br />

    
            
            <Button type="submit" colorScheme="blue" mt={4}>
              Enviar Comentario
            </Button>
          </form>
          </DrawerBody>
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export const CommentsList = ({ name,content,creationDate}) => {
  return (
    <Card >
  <CardBody>
    <h1>{name}</h1>
    <Text>{content}</Text>
  </CardBody>
</Card>

  )
}