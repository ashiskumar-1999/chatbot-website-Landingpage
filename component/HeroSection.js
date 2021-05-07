import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"

export default function HeroSection() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text as={"span"} position={"relative"} color="gray.600">
              An AI bot
            </Text>
            <br />
            <Text color="blue.700" as="span">
              that gives you valuable health tips
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            This Health Bot will help you detect your disease by the symptoms
            you provided.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.700"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Chat with me
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          src={
            "https://res.cloudinary.com/emishalabs/image/upload/c_scale,w_1090/v1620312981/Ashis's%20Project/20945452_yfj98i.webp"
          }
        />
      </Flex>
    </Stack>
  )
}
