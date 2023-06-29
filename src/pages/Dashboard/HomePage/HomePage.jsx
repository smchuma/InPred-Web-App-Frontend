import { Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { CardGrid, Distribution } from "../../../components/DashComps";

const HomePage = () => {
  const bg = useColorModeValue("white", "#181818");

  return (
    <Stack h="100vh" bg={bg} w="100%">
      <Stack>
        <CardGrid />
        <Flex px="10px" w="100%">
          <Flex flex="1">
            <Distribution />
          </Flex>
          <Flex flex="1">
            <Text>Hello</Text>
          </Flex>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default HomePage;
