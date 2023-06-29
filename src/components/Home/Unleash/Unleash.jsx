/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { useLottie } from "lottie-react";
import power from "../../../assets/power2.json";

const Unleash = () => {
  const options = {
    animationData: power,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <Stack
      px="50px"
      py="0px"
      w="100%"
      bgGradient="linear(to-b, #010B40, #0D0D0D )"
      color="white"
      direction={{ base: "column", md: "row" }}
    >
      <Flex flex="1" align="center" justify="center">
        <Box w="70%">{View}</Box>
      </Flex>
      <Flex flex="1" justify="center" align="center">
        <Stack>
          <Text
            p={2}
            fontSize={{ base: "20px", md: "30px" }}
            textAlign="center"
          >
            Predict Your Customer's Next Purchase, Effortlessly
          </Text>
          <Text
            p={2}
            fontSize={{ base: "15px", md: "18px" }}
            textAlign="justify"
          >
            Have you ever wished you could predict what your customers will buy
            next? Our website tool can do just that! Using the power of data and
            technology, we help you forecast what your customers are likely to
            purchase in the future. This means you can plan ahead, stock the
            right products, and provide a personalized experience for your
            customers.
          </Text>
        </Stack>
      </Flex>
      
    </Stack>
  );
};

export default Unleash;
