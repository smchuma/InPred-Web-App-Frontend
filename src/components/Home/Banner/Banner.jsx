/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import power from "../../../assets/derulo.json";
import { useLottie } from "lottie-react";

const Banner = () => {
  const options = {
    animationData: power,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <>
      <Stack
        color="white"
        w="100%"
        h="80vh"
        direction="row"
        mt="80px"
        bgGradient="linear(to-b, #0D0D0D, #010B40)"
      >
        <Flex pt="150px" align="center" flexDir="column" flex="1">
          <Heading fontSize={{ base: "40px", md: "70px" }}>InPred.</Heading>
          <Text
            px={8}
            textAlign="justify"
            mt={2}
            fontSize="18px"
          >
            Make Smart Decisions for Your Small Business with Ease
          </Text>
          <Text  px={8} pt="10px" textAlign="justify" fontSize="18px" >Our tool is here to help your small business thrive, no matter your background or expertise. We've created a simple and easy-to-use platform that empowers you to make smart decisions and boost your sales.</Text>
          <Button mt="20px" w="30%">
            Sign up now
          </Button>
        </Flex>
        <Flex flex="1" justify="center" align="center">
          <Box w="80%">
          {View}
          </Box>
        </Flex>
      </Stack>
    </>
  );
};

export default Banner;
