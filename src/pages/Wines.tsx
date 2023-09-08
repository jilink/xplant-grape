import { Flex, Text } from "@chakra-ui/react";
import Title from "../components/Title";
import "./Pages.css";
import WineList from "../components/WineList";

const Wines = () => {
  return (
    <Flex
      id="wines"
      mx={["5", "20"]}
      p="5"
      direction="column"
      color="white"
      align="center"
    >
      <Flex
        direction="column"
        align="center"
        justify="space-between"
        textAlign="center"
        maxW="1000px"
      >
        <Title text="WINES" img="/images/wine.jpg" />
        <Text mb="7" className="fade-in delay-1">
          Some of the stocks available
        </Text>
        <WineList />
      </Flex>
    </Flex>
  );
};

export default Wines;
