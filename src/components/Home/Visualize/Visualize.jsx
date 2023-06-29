/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import chart from "../../../assets/chart2.json";
import { useLottie } from "lottie-react";

const Visualize = () => {
 
  const options = {
    animationData: chart,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <>
      <Stack
        bgGradient="linear(to-b, #0D0D0D, #010B40)"
        color="white"
        px={10}
        py="100px"
        w="100%"
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <Flex flex="1">{View}</Flex>
        <Flex p={5} justify="center" align="center" flex="1">
          <Box>
            <Text textAlign="center" fontSize="30px">
            Boost Your Sales, Delight Your Customers


            </Text>
            <Text
              mt={{ base: 2, md: 0 }}
              textAlign="justify"
              p={{ base: 0, md: 5 }}
            >
             When you understand what your customers want, you can exceed their expectations. Our website tool helps you identify trends, preferences, and patterns in your customer's behavior. Armed with this knowledge, you can tailor your offerings, provide personalized recommendations, and create memorable experiences that keep your customers coming back for more.
            </Text>
          </Box>
        </Flex>
      </Stack>
    </>
  );
};

export default Visualize;
