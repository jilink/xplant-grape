import { Box, Image, Divider, Flex, Text } from "@chakra-ui/react";
import Title from "../components/Title";
import "./Pages.css";
import Services from "../components/Services";

const Grapes = () => {
  return (
    <Flex
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
        <Title text="GRAPES" img="/images/grapes.jpg" />
        <Text className="fade-in delay-1">
          Tissue culture has become a safer approach to grapes stock production.
          We produce virus and pathogen free root stocks. We are certified Group
          2 Tissue Culture center. All our stocks are Oregon Certified Nursery Stocks. This means that our grapes are certified to be
          pathogens and virus free,  including Red Blotch Virus, Leaf Roll virus and many other pests and disease.
        </Text>
        <Divider w="50%" m="5" className="fade-in delay-1" />

        <Box
          m="5"
          bg="#EAE9DB"
          className="fade-in delay-2"
          border="1px solid gray"
          borderRadius="md"
        >
          <Flex alignItems="center">
            <Text
              p="1"
              color="black"
              fontSize={["md", "2xl"]}
              fontWeight="bold"
            >
              RED BLOTCH VIRUS is a big Problem
            </Text>
            <Image src="/images/red-blotch.jpeg" alt="Image" ml={4} w="50%" />
          </Flex>
        </Box>
        <Text m="5" className="fade-in delay-2">
          Picture Grapevine Red Blot​ch virus,  is a serious threat to all grapes in the USA
          and particularly the entire PNW has seen an increase in RBV infected
          vines. Some of the symptoms include a reddish coloration of the leaves
          and results into decrease fruit production and yield. Using our TC
          services we can save your precious stocks and keep them in storage as
          an insurance policy. Contact us for more information about testing
          your stocks and saving them in tissue culture.
        </Text>
        <Divider w="50%" m="5" className="fade-in delay-2" />
      </Flex>

      <Flex align="center" direction="column" className="fade-in delay-3">
        <Text fontSize="4xl" m="5">Services</Text>
        <Services />
      </Flex>
    </Flex>
  );
};

export default Grapes;
