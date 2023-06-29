import {
  Box,
  Flex,
  Grid,
  GridItem,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaComment, FaStar, FaPlusCircle, FaStarHalfAlt } from "react-icons/fa";

const CardGrid = () => {
  const c = useColorModeValue("#6A6DA6", "cyan");
  const bg = useColorModeValue("#f2f2f2", "#282728");

  const links = [
    {
      id: 1,
      title: "New Sentiments Today:",
      icon: <Icon as={FaPlusCircle} color={c} />,
      score: "321",
    },
    {
      id: 2,
      title: "Total Sentiments:",
      icon: <Icon as={FaComment} color={c} />,
      score: "2,567",
    },
    {
      id: 3,
      title: "Sentiment Score:",
      icon: <Icon as={FaStar} color={c} />,
      score: "2,567",
    },
    {
      id: 4,
      title: "Average Rating:",
      icon: <Icon as={FaStarHalfAlt} color={c} />,
      score: "2,567",
    },
  ];
  return (
    <Box mt="20px" p={4}>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {links.map((link) => (
          <GridItem key={link.id}>
            <Box bg={bg} borderWidth="1px" borderRadius="20px" p={5}>
              <Flex align="center" gap="5px">
                <Box fontSize="20px">{link.icon}</Box>
                <Text fontSize="14px">{link.title}</Text>
              </Flex>
              <Text fontSize="30px">{link.score}</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default CardGrid;
