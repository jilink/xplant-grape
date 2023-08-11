import { Box } from "@chakra-ui/react"
import Grapes from "./pages/Grapes"
import Header from "./components/Header"

function App() {

  return (
    <Box w="100%" bg="black" minH="100vh" fontFamily="'Kadwa', serif;">
     <Header/>
    <Grapes/>
    </Box>
  )
}

export default App
