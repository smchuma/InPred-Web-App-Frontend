/* eslint-disable react/no-unescaped-entities */
import { Stack, Text } from "@chakra-ui/react";

const Today = () => {
 
  return (
    <>
      <Stack
        color="white"
        align="center"
        w="100%"
        py={{ base: "50px", md: "150px" }}
        justify="center"
        bg="#010B40"
      >
        <Text
          fontSize={{ base: "18px", md: "30px" }}
          textAlign="center"
          mt={{ base: "50px", md: "0px" }}
        >
          Join Us and Experience the Difference
        </Text>
        <Text
          px={{ base: "20px", md: "150px" }}
          textAlign="center"
          mt={2}
          fontSize={{ base: "14px", md: "18px" }}
        >
          Ready to take your business to new heights? Join us and experience the difference our tool can make. Say goodbye to uncertainty and hello to smart decisions that drive success. Together, let's unlock the power of predictive analytics and propel your business forward.
        </Text>
      </Stack>
    </>
  );
};

export default Today;
