import React from "react"
import { Flex, Heading, Text, Box } from "@chakra-ui/react"

function WhySection() {
  return (
    <Flex direction="column" justifyContent="flex-start" mx="100px">
      <Heading size="2xl" color="gray.600" textAlign="center">
        Why is there any need of an AI Bot?
      </Heading>
      <Box my="20px">
        <Text fontSize="xl" fontWeight="normal" color="blue.700">
          Many people dies in now-a-days in india because of the identification
          of the disease in time. Many people also ingores the disease symptoms
          because of going to Hospital or Clinic which leads him or her to die.
          This bot will help you to findout the disease without going to the
          Hospital.
        </Text>
      </Box>
    </Flex>
  )
}

export default WhySection
