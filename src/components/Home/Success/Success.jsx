import { Box, Grid, GridItem, Stack, Text, VStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { RiLineChartFill } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { AiFillTool, AiOutlineDesktop } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";

const Success = () => {
  const features = [
    {
      id: 1,
      title: "Smart Predictions",
      icon: <Icon as={RxDotFilled} boxSize={8} />,
      text: "Make accurate predictions about your customer's next purchase. Our advanced algorithms analyze your sales data to provide insights on what your customers are likely to buy next.",
    },
    {
      id: 2,
      title: "Actionable Insights",
      icon: <Icon as={RiLineChartFill} boxSize={6} />,
      text: "Gain actionable insights from your sales data. Our tool goes beyond raw numbers and generates meaningful recommendations and strategies that you can implement to boost your sales and grow your business.",
    },
    {
      id: 3,
      title: "Real-Time Analytics",
      icon: <Icon as={BsFillFileBarGraphFill} boxSize={6} />,

      text: "Stay up-to-date with real-time analytics. Our platform provides instant analysis and updates on customer behavior, allowing you to adapt your strategies on the fly and make informed decisions.",
    },
    {
      id: 4,
      title: "User-Friendly Interface",
      icon: <Icon as={AiOutlineDesktop} boxSize={6} />,
      text: "Enjoy a simple and intuitive interface that requires no technical expertise. Our user-friendly design ensures that anyone can navigate and utilize the tool effortlessly.",
    },
    {
      id: 7,
      title: "Personalized Recommendations",
      icon: <Icon as={AiFillTool} boxSize={6} />,
      text: "Delight your customers with personalized recommendations. Our tool identifies individual preferences and suggests tailored product offerings, enhancing the shopping experience and driving customer satisfaction.",
    },
    {
      id: 8,
      title: "Easy Integration",
      icon: <Icon as={TbReportAnalytics} boxSize={6} />,
      text: "Seamlessly integrate our website tool with your existing systems. Our solution works harmoniously with your sales platforms, making data collection and analysis a breeze.",
    },
  ];

  return (
    <Stack
      pt="150px"
      bg="#0D0D0D"
      color="white"
      pb="100px"
      w="100%"
      boxShadow="rgba(0, 0, 0, 0.2) 0px 4px 12px"
    >
      <Text mt="80px" textAlign="center" fontSize="25px">
        Powerful Features to Drive Your Business Forward
      </Text>
      <Text
        textAlign="center"
        m="auto"
        w="80%"
        mt={3}
        fontSize={{ base: "15px", md: "18px" }}
      >
        Discover the powerful features that our website tool offers to help
        drive your small business forward. With these advanced capabilities, you
        can make data-driven decisions, enhance customer experiences, and boost
        your sales effortlessly.
      </Text>
      <Grid
        p={12}
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
        mt="50px"
      >
        {features.map((feature) => (
          <GridItem key={feature.id}>
            <Box p={4} cursor="pointer" borderRadius="md" bg="#181818">
              <VStack textAlign="center" p={5} spacing={2}>
                {feature.icon}
                <Text fontWeight="bold">{feature.title}</Text>
                <Text>{feature.text}</Text>
              </VStack>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};

export default Success;
