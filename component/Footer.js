import React from "react"
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"

function Footer() {
  return (
    <Box
      bg={useColorModeValue("blue.700", "blue.700")}
      color={useColorModeValue("#ffffff")}
      mt="50px"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text fontSize="lg">
          ©2021 made by Prabhudutta, Sambit, Ashis, Dibya
        </Text>
      </Container>
    </Box>
  )
}

export default Footer
