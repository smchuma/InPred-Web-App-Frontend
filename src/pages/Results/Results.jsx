import { useState } from "react";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import { HorizontalLoader } from "../../components";
import useProject from "../../hooks/useProject";
import { AiOutlineUser } from "react-icons/ai";
import power from "../../assets/customer.jpg";

const MotionBox = motion(Box);

const Results = () => {
  const { id } = useParams();
  const { state } = useProject();
  const [selectedCard, setSelectedCard] = useState(null);

  const projects = state?.projects;

  if (!projects) return <HorizontalLoader />;

  const filteredProjects = projects.filter((project) => project._id === id);

  const handleCardClick = (customerId) => {
    setSelectedCard(selectedCard === customerId ? null : customerId);
  };

  return (
    <Stack
      color="white"
      minH="100vh"
      bgGradient="linear(to-b, #0D0D0D, #010B40)"
      w="100%"
      p="20px"
    >
      <Stack>
        {filteredProjects.map((project) => (
          <Box key={project._id}>
            <Box>
              <Text
                fontSize="20px"
                textAlign="center"
                bg="#171745"
                py={4}
                mx={5}
                mt={15}
                mb={8}
                fontWeight="bold"
              >
                {project.title} predictions
              </Text>
            </Box>
            <SimpleGrid
              columns={{
                base: 1,
                sm: 2,
                md: 2,
                lg: 3,
              }}
              spacing={5}
              align="center"
              mb={10}
              cursor="pointer"
            >
              {project.results.map((customerData) => {
                const customerId = Object.keys(customerData)[0];
                const products = customerData[customerId];
                const isExpanded = selectedCard === customerId;

                return (
                  <Box
                    key={customerId}
                    onClick={() => handleCardClick(customerId)}
                  >
                    <Card
                      bg="transparent"
                      maxW="2xs"
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                      borderColor={"whiteAlpha.400"}
                      boxShadow="lg"
                      _hover={{ boxShadow: "xl" }}
                    >
                      <CardBody>
                        <Image
                          src={power}
                          alt="Green double couch with wooden legs"
                          borderRadius="lg"
                        />
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <Flex justify="space-between" color="white">
                          <Icon as={AiOutlineUser} w={6} h={6} />
                          <Text ml={2} fontSize="sm">
                            {customerId}
                          </Text>
                        </Flex>
                      </CardFooter>
                    </Card>

                    <AnimatePresence>
                      {isExpanded && (
                        <MotionBox
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          style={{ overflow: "hidden" }}
                        >
                          <Box>
                            {products.map((product) => (
                              <Flex
                                w="65%"
                                bg="#171745"
                                mt={2}
                                key={product.product_id}
                                justify="space-between"
                                p={5}
                                borderRadius={"md"}
                              >
                                <Text>Product ID: {product.product_id}</Text>
                                <Text>
                                  Quantity: {product.predicted_quantity}
                                </Text>
                              </Flex>
                            ))}
                          </Box>
                        </MotionBox>
                      )}
                    </AnimatePresence>
                  </Box>
                );
              })}
            </SimpleGrid>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Results;
