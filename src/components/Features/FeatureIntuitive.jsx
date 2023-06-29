/* eslint-disable react/no-unescaped-entities */
import { Stack, Text, useColorModeValue } from "@chakra-ui/react";

const FeatureIntuitive = () => {
  const bgGradient = "linear(to-r, #152659, #0c1631)";
  const darkModeGradient = "linear(to-r, #0c1631, #03060e)";

  const backgroundGradient = useColorModeValue(
    bgGradient, 
    darkModeGradient
  );
  return (
    <>
      <Stack
        color="white"
        align="center"
        w="100%"
        py={{ base: "50px", md: "150px" }}
        justify="center"
        bgGradient={ backgroundGradient}
      >
        <Text
          fontSize={{ base: "18px", md: "30px" }}
          textAlign="center"
          mt={{ base: "50px", md: "0px" }}
        >
          Data Export and Reporting
        </Text>
        <Text
          px={{ base: "20px", md: "150px" }}
          textAlign="center"
          mt={2}
          fontSize={{ base: "14px", md: "18px" }}
        >
Export sentiment analysis data and generate comprehensive reports with SemaSenti. Share insights with stakeholders, collaborate with team members, and use the data for informed decision-making. Our data export and reporting features enable you to communicate sentiment analysis results effectively and drive actionable strategies.        </Text>
      </Stack>
    </>
  );
};

export default FeatureIntuitive;
