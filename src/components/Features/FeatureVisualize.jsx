import { Box, Flex,   Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useLottie } from "lottie-react";
import chart from "../../assets/chart.json";


const FeatureVisualize = () => {
  const bg = useColorModeValue("rgba(255, 255, 255, 0.5)", "#282728");

  const options = {
    animationData: chart,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <>
      <Stack
        px="50px"
        w="100%"
        py="100px"
        direction={{ base: "column", md: "row" }}
      >
        <Flex  flex="1" align="center" justify="center">
        <Box bg={bg} p="50px" borderRadius="20px" boxShadow="0 5px 15px rgba(106, 109, 166, 0.5)">
         <Box>{View}</Box>
         </Box>
        </Flex>
        <Flex flex="1" justify="center" align="center">
          <Stack p="40px">
            <Text fontWeight="bold" p={2} fontSize={{ base: "20px", md: "22px" }}>
              Data Visualization
            </Text>
            <Text
              
              fontSize={{ base: "15px", md: "17px" }}
              textAlign="justify"
            >
              Visualize sentiment analysis results with our intuitive data
              visualization tools. SemaSenti offers interactive charts and
              graphs that present sentiment trends, sentiment distribution over
              time, and other key metrics in a visually appealing and
              easy-to-understand format. Spot trends, patterns, and outliers at
              a glance, empowering you to extract valuable insights from your
              sentiment analysis data.
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
};

export default FeatureVisualize;
