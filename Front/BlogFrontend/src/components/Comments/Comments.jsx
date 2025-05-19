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
          <form onSubmit={handleSubmit(addComment)} color="black">

            <Input
              placeholder="Nombre..."
              {...register('name', { required: 'El nombre es obligatorio', minLength: {value: 5, message: 'El nombre debe tener al menos 5 caracteres'} })}
            />
            {errors.name && <p>{errors.name.message}</p>}
            <br></br>
            <br></br>
            <br></br>

           
            <Input color ="black"
              placeholder="Comentario..."
              {...register('content', { required: 'El comentario es obligatorio', minLength: {value: 10, message: 'El comentario debe tener al menos 10 caracteres'} })}
            />
            {errors.content && <p>{errors.content.message}</p>}
            <br></br>


    
            <br></br>
            <br></br>
            <Button type="submit" colorScheme="blue" mt={4}>
              Enviar Comentario
            </Button>
          </form>
          </DrawerBody>
          <DrawerFooter >
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
    
    <Text>{creationDate}</Text>
  </CardBody>
</Card>

  )
}