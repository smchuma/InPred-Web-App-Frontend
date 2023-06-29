import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useLottie } from "lottie-react";
import chart from "../../assets/sentiment2.json";

const FeatureSentiment = () => {
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
        py="100px"
        w="100%"
        direction={{ base: "column", md: "row" }}
      >
        <Flex flex="1" justify="center" align="center">
          <Stack>
            <Text
              fontWeight="bold"
              p={2}
              fontSize={{ base: "20px", md: "22px" }}
            >
              Sentiment Analysis
            </Text>
            <Text
              p={2}
              fontSize={{ base: "15px", md: "18px" }}
              textAlign="justify"
            >
              SemaSenti provides comprehensive sentiment analysis capabilities
              to help you understand and analyze customer sentiments. With our
              advanced machine learning algorithms, we accurately predict
              sentiment from social media, customer reviews, and other online
              sources. Identify positive, negative, and neutral sentiments to
              gain valuable insights into customer perceptions of your brand or
              product.
            </Text>
          </Stack>
        </Flex>
        <Flex p="50px" flex="1" align="center" justify="center">
          <Box
            bg={bg}
            borderRadius="20px"
            boxShadow="0 5px 15px rgba(106, 109, 166, 0.2)"
          >
            {View}
          </Box>
        </Flex>
      </Stack>
    </>
  );
};

export default FeatureSentiment;
