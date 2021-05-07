import { HStack } from "@chakra-ui/layout"
import { Image, Text, Box } from "@chakra-ui/react"
import React from "react"
import Link from "next/link"

const Navbar = () => {
  return (
    <HStack
      h="80px"
      w="90%"
      mx="auto"
      my="40px"
      backgroundColor="#ffffff"
      border="2px solid"
      borderRadius="10px"
      boxShadow="10px"
      px="20px"
      justifyContent="space-between"
    >
      <Box>
        <Link href="/">
          <Image src="https://res.cloudinary.com/emishalabs/image/upload/c_scale,q_100,w_100/v1620396025/Ashis's%20Project/chatbotlogo2_xw6y4c.webp" />
        </Link>
      </Box>
      <HStack justifyContent="space-around">
        <Box>
          <Text fontSize="18px" fontWeight="bold">
            Home
          </Text>
        </Box>
        <Box>
          <Text fontSize="18px" fontWeight="bold">
            HealthTips
          </Text>
        </Box>
        <Box>
          <Text fontSize="18px" fontWeight="bold">
            Contact us
          </Text>
        </Box>
      </HStack>
    </HStack>
  )
}

export default Navbar
