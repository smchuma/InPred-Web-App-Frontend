import { Stack, Text, useColorModeValue } from "@chakra-ui/react";

const FeatureBanner = () => {
  const bgGradient = "linear(to-r, #152659, #0c1631)";
  const darkModeGradient = "linear(to-r, #0c1631, #03060e)";
  
  
  const backgroundGradient = useColorModeValue(
    bgGradient, 
    darkModeGradient
  );
  return (
    <>
      <Stack
        boxShadow="rgba(0, 0, 0, 0.2) 0px 2px 4px"
        align="center"
        w="100%"
        h="60vh"
        justify="center"
        color="white"
        bgGradient={backgroundGradient}

        
      >
        <Text
          px={2}
          textAlign="center"
          mt={2}
          fontSize={{ base: "20px", md: "30px" }}
        >
          Unlock Customer Insights with SemaSenti: <br /> Harness the Power of
          Sentiment Analysis{" "}
        </Text>
        <Text
          textAlign="center"
          w="80%"
          mt={3}
          fontSize={{ base: "15px", md: "16px" }}
        >
          Welcome to SemaSenti, the leading Swahili sentiment analysis tool
          designed to empower local businesses in Kenya and Tanzania. Gain deep
          understanding and valuable insights into customer sentiments with our
          powerful platform. Harness the power of sentiment analysis to unlock
          actionable insights and drive informed decision-making.
        </Text>
      </Stack>
    </>
  );
};

export default FeatureBanner;
