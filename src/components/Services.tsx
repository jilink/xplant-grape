import { Box, Flex, Text, Image, Button, Link } from "@chakra-ui/react";

const Services = () => {
  const services = [
    {
      img: "/images/clone.jpg",
      title: "Clonning and Storage",
      text: "Bring your precious cultivars for cloning and storage",
    },
    {
      img: "/images/tc.jpg",
      title: "Propagation",
      text: "Multiply and propagate desired cultivars",
    },
    {
      img: "/images/grapes.jpg",
      title: "Grafting",
      text: "Customize your cultivars including grafting with your desired root stocks",
    },
  ];
  return (
    <Flex wrap="wrap" align="stretch" justify={["center", "space-between"]}>
      {services.map(({ img, text, title }) => (
        <Service key={title} img={img} text={text} title={title} />
      ))}
    </Flex>
  );
};

const Service = ({
  img,
  title,
  text,
  ctaText = "Learn More",
}: {
  img: string;
  title: string;
  text: string;
  ctaText?: string;
}) => {
  return (
    <Box p="2" maxW={["80%", "30%"]} textAlign="center">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"     // Centrer verticalement
        justifyContent="center" // Centrer horizontalement
        height="100%"
      >
        <Box
          borderRadius="50%"
          overflow="hidden"
          boxSize="150px"
          marginBottom="1rem"
        >
          <Image src={img} alt="Image" w="100%" h="100%" objectFit="cover" />
        </Box>
        <Text fontSize="xl" fontWeight="bold" mt={3}>
          {title}
        </Text>
        <Text fontSize="xs" my={4}>{text}</Text>
        <Link mt="auto" href="https://xplant.com/contact.html">
        <Button  _hover={{bg: "#4CD038"}} color="black" w="100%" maxW="200px" bg="#EAE9DB" >
          {ctaText}
        </Button>
        </Link>
      </Box>
    </Box>
  );
};



export default Services;
