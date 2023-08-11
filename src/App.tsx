import { Box, Divider, Flex } from "@chakra-ui/react"
import Grapes from "./pages/Grapes"
import Header from "./components/Header"
import { useState } from "react"
import Wines from "./pages/Wines"
import Contact from "./pages/Contact"

function App() {


  return (
    <Flex direction="column" w="100%" bg="black" minH="100vh" fontFamily="'Kadwa', serif;">
     <Header/>
    <Grapes/>
    <Divider alignSelf="center" m="5" w="80%"/>
    <Wines/>
    <Contact/>
    </Flex>
  )
}

export default App
