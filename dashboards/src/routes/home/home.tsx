import React from "react";
import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import Card from "../../components/common/card/card";
const Home: React.FC = () => {
  return (
    <Box m="70px">
      <Center>
        <SimpleGrid columns={[1, 2]} spacingX="10px" spacingY="10px">
          <Card />
          <Card />
          <Card />
          <Card />
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default Home;
