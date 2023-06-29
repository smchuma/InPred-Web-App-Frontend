import { Link, useParams } from "react-router-dom";
import {
  Grid,
  GridItem,
  Icon,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdMonitorHeart } from "react-icons/md";
import { BsFillPieChartFill } from "react-icons/bs";
import { AiOutlineFileSearch } from "react-icons/ai";
import AnalyzeCard from "./AnalyzeCard/AnalyzeCard";

const Analyze = () => {
  const { id } = useParams();

  const bg = useColorModeValue("white", "#181818");
  const bg2 = useColorModeValue("#f2f2f2", "#282728");
  const c = useColorModeValue("#6A6DA6", "cyan");
  const lightModeBoxShadow = "rgba(0, 0, 0, 0.4) 0px 4px 12px";
  const darkModeBoxShadow = "rgba(255, 255, 255, 0.2) 0px 4px 12px";

  const boxShadow = useColorModeValue(
    lightModeBoxShadow, // Light mode boxShadow value
    darkModeBoxShadow // Dark mode boxShadow value
  );

  const features = [
    {
      id: "monitor",
      title: "Monitor your brand",
      icon: <Icon as={MdMonitorHeart} boxSize={8} color={c} />,
      text: "Find out what people are saying about your brand",
      route: "monitor",
    },

    {
      id: "competitive-analysis",
      title: "Competitive Analysis",
      icon: <Icon as={BsFillPieChartFill} color={c} boxSize={6} />,
      text: "Track your competitors activity. see what your competitors are saying and doing.",
      route: "competitive-analysis",
    },
    {
      id: "topic-research",
      title: "Topic Research",
      icon: <Icon as={AiOutlineFileSearch} color={c} boxSize={6} />,
      text: "Monitor general topics discussed, marketing campaigns and so much more",
      route: "topic-research",
    },
  ];

  const selectedFeature = features.find((feature) => feature.id === Number(id));

  return (
    <>
      {selectedFeature ? (
        <AnalyzeCard feature={selectedFeature} />
      ) : (
        <Stack bg={bg} justify="center" align="center" h="100vh" w="100%">
          <Text textAlign="center" fontSize="25px">
            Setup your account, what is your intended use?
          </Text>

          <Grid
            px="100px"
            py={10}
           
            templateColumns={{
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
            }}
            gap={4}
          >
            {features.map((feature) => (
              <GridItem key={feature.id}>
                <Link to={feature.route}>
                  <Stack
                    align="center"
                    justify="center"
                    h="15em"
                    bg={bg2}
                    borderWidth={1}
                    cursor="pointer"
                    borderRadius="md"
                    boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    transition="box-shadow 0.3s ease"
                    _hover={{ boxShadow: boxShadow }}
                  >
                    <VStack textAlign="center" p={5} spacing={2}>
                      {feature.icon}
                      <Text fontWeight="bold">{feature.title}</Text>
                      <Text>{feature.text}</Text>
                    </VStack>
                  </Stack>
                </Link>
              </GridItem>
            ))}
          </Grid>
        </Stack>
      )}
    </>
  );
};

export default Analyze;
