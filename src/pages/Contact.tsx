import { Box, Flex, Link, Text } from "@chakra-ui/react";
import "./Pages.css";

const Contact = () => {
  return (
    <Flex
      id="contact"
      mx={["5", "20"]}
      p="5"
      direction="column"
      color="white"
      align="center"
      minH="100vh"
    >
      <Flex
        direction="column"
        align="center"
        justify="space-between"
        textAlign="center"
        maxW="1000px"
      >
        <Text color="white" fontSize={["7xl", "100px"]} p="7" fontWeight="800;">
          CONTACT
        </Text>
        <Box maxW="400px" m="auto">
          <Text fontSize="lg" textAlign="center" fontWeight="bold" mb={4}>
            To discuss how Xplant Laboratory can meet your needs, please call or
            email us today.
          </Text>
          <Text fontSize="md" textAlign="center" mb={4}>
            Follow us on Instagram at{" "}
            <Link
              color="blue.500"
              href="https://www.instagram.com/xphylab/"
              target="_blank"
            >
              @xplant Laboratory
            </Link>
            .
          </Text>

          <Box mt={6}>
            <Text fontWeight="bold" fontSize="lg" mb={2}>
              Hemp, Wasabi, Grapes, and Ornamentals Division
            </Text>
            <Text>Philippe Thuillier</Text>
            <Text>503-314-2218</Text>
            <Text>xplantphil@gmail.com</Text>
          </Box>

          <Box mt={6}>
            <Text fontWeight="bold" fontSize="lg" mb={2}>
              Hops and Hazelnuts
            </Text>
            <Text>Vijay Balan</Text>
            <Text>503-803-6290</Text>
            <Text>info@xplant.com</Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Contact;
