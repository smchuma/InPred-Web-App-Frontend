/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import comp from "../../assets/comp.png";

const FeatureVisualize = () => {
  const bg = useColorModeValue("rgba(255, 255, 255, 0.5)", "#282728");

  return (
    <>
      <Stack
        px="50px"
        w="100%"
        py="100px"
        direction={{ base: "column", md: "row" }}
      >
        <Flex flex="1" justify="center" align="center">
          <Stack>
            <Text
              fontWeight="bold"
              p={2}
              fontSize={{ base: "20px", md: "22px" }}
            >
              Competitor Analysis
            </Text>
            <Text
              p={2}
              fontSize={{ base: "15px", md: "18px" }}
              textAlign="justify"
            >
              Benchmark your brand's sentiment performance against competitors
              with SemaSenti's competitor analysis feature. Understand how your
              brand's sentiment metrics compare to competitors' and identify
              areas for improvement or competitive advantage. Uncover valuable
              insights about customer perceptions of your competitors and gain a
              strategic edge in the market.
            </Text>
          </Stack>
        </Flex>
        <Flex flex="1" align="center" justify="center">
          <Box
            bg={bg}
            p="10px"
            borderRadius="20px"
            boxShadow="0 5px 15px rgba(106, 109, 166, 0.3)"
          >
            <Image src={comp} />
          </Box>
        </Flex>
      </Stack>
    </>
  );
};

export default FeatureVisualize;
