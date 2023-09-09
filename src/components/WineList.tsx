import { Box, Grid, GridItem, Image, Stack } from "@chakra-ui/react";

const WineList = () => {
  const wines = [
    {
      id: 1,
      name: "Chardonnay",
      image: "/images/wine-bottle.jpg",
    },
    {
      id: 2,
      name: "Merlot",
      image: "/images/wine-bottle.jpg",
    },
    {
      id: 3,
      name: "Pinot Noir",
      image: "/images/wine-bottle.jpg",
    },
    {
      id: 4,
      name: "Pinot gris",
      image: "/images/wine-bottle.jpg",
    },
    {
      id: 5,
      name: "Cabernet",
      image: "/images/wine-bottle.jpg",
    },
    {
      id: 6,
      name: "Syrah",
      image: "/images/wine-bottle.jpg",
    },
    {
      id: 7,
      name: "Riesling",
      image: "/images/wine-bottle.jpg",
    },
    {
      id: 7,
      name: "Your Wine",
      image: "/images/wine-bottle.jpg",
    },
  ];

  return (
    <Stack spacing={6} direction={["column", "row"]} justify="center" w="100%">
      <Image alignSelf="center" boxSize="30%" src="/images/wine bottle.jpeg" alt="wine" />
      <Grid justifyItems={["center", "left"]}  templateColumns={"1fr"} gap={6}>
        {wines.map((wine) => (
          <GridItem key={wine.id}>
            <Box borderRadius="md" boxShadow="md">
              <Box mr="auto" textAlign="center">
                {wine.name}
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};

export default WineList;
