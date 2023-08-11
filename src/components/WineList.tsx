import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

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
    name: "Vin rouge",
    image: "/images/wine-bottle.jpg",
  },
  {
    id: 5,
    name: "Vin rouge",
    image: "/images/wine-bottle.jpg",
  },
  {
    id: 6,
    name: "Vin rouge",
    image: "/images/wine-bottle.jpg",
  },
];


  return (
    <Grid templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]} gap={6}>
      {wines.map((wine) => (
        <GridItem key={wine.id}>
          <Box borderRadius="md" boxShadow="md">
            <Image src={wine.image} alt={wine.name} />
            <Box mt={2} textAlign="center">
              {wine.name}
            </Box>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default WineList;
