import { Box, Text } from "@chakra-ui/react"
import React from "react"

const Card = ({ text }) => {
  return (
    <Box
      maxW="300px"
      minH="335px"
      boxShadow={"xl"}
      rounded={"md"}
      p="20px"
      overflow={"hidden"}
    >
      <Text color="blue.700" fontSize="24px" fontWeight="normal">
        {text}
      </Text>
    </Box>
  )
}

export default Card
