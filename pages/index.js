import React from "react"
import { Box, SimpleGrid, Image } from "@chakra-ui/react"
import Navbar from "../component/Navbar"
import HeroSection from "../component/HeroSection"
import Footer from "../component/Footer"
import Card from "../component/Card"
import WhySection from "../component/WhySection"

export default function Home() {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <WhySection />
      <SimpleGrid
        columns={3}
        justifyContent="space-between"
        alignItems="center"
        mx="100px"
        my="100px"
      >
        <Card text=" Help you to find the disease by giving the symptoms that you have." />
        <Card text="Give you some primary recovery tips for the disease that you are suffering of." />
        <Card text="Connect with the doctors as well as clinics for your treatment." />
      </SimpleGrid>
      <Box mx="100px" px="240px">
        <Image src="https://res.cloudinary.com/emishalabs/image/upload/c_scale,w_678/v1620394223/Ashis's%20Project/317717-P94VDW-609_2_nzdnk7.webp" />
      </Box>
      <Footer />
    </Box>
  )
}
