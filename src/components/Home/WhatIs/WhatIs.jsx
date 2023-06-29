/* eslint-disable react/no-unescaped-entities */
import { Stack, Text,  } from "@chakra-ui/react";

const WhatIs = () => {
 
  return (
    <>
      <Stack
        color="white"
        align="center"
        w="100%"
        py={{ base: "50px", md: "150px" }}
        justify="center"
        bg="#0D0D0D"
      >
        <Text fontSize={{ base: "18px", md: "30px" }}>
        No Numbers? No Problem!



        </Text>
        <Text
          w="80%"
          textAlign="center"
          mt={2}
          fontSize={{ base: "14px", md: "18px" }}
        >
You don't need to be a numbers person to use our tool. We've made it user-friendly, so even if you're not familiar with complex analytics or data analysis, you can still benefit from its powerful capabilities. Simply input your sales data, and our tool will do the rest, giving you valuable insights and recommendations.        </Text>
      </Stack>
    </>
  );
};

export default WhatIs;
