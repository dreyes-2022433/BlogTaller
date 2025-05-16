import React from "react"
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'

export const Comments=()=> {
  let [value, setValue] = React.useState('')

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
  return (
    <>
      <Text mb='8px'>Value: {value}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder='Here is a sample placeholder'
        size='sm'
      />
    </>
  )
}