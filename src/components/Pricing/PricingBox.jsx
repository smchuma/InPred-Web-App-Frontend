import {
    Box,
    Stack,
    HStack,
    Text,
    List,
    ListIcon,
    ListItem,
    Button
  } from "@chakra-ui/react";
  
 import {AiFillCheckCircle} from "react-icons/ai"
  import PropTypes from "prop-types";
  
  const PricingBox = ({ popular, name, price, info = "", features = [] }) => {
    return (
      <Stack
        spacing={2}
        boxShadow="md"
        borderColor={popular ? "teal.300" : "gray.300"}
        borderRadius="20px"
        p={4}
        h="500px"
        backgroundColor="white"
        position="relative"
        textAlign="center"
        
      >
        <Text textTransform="uppercase">{name}</Text>
        <HStack justify="center">
          <Text  fontWeight="bold" fontSize="30px">{price}</Text>
          {price && (
            <Box as="span" color="gray.600" fontSize="sm">
              / mo
            </Box>
          )}
          
        </HStack>
        <Text>billed monthly</Text>
        <Box>
          <Button
            variant="solid"
            mt="20px"
            size="lg"
            width="100%"
            borderRadius={10}
            textAlign="center"
            fontSize="md"
            backgroundColor= "#162D59"
            _hover={{
              backgroundColor: "#365487"
            }}
            color="white"
          >
            Purchase
          </Button>
          <Text fontSize="xs">{info}</Text>
        </Box>
        <List flex="1">
          {features.map((feat) => (
            <ListItem key={Math.random()}>
              <ListIcon as={AiFillCheckCircle} color="gray.400" />
              {feat}
            </ListItem>
          ))}
        </List>
      
      </Stack>
    );
  };
  PricingBox.propTypes = {
    name: PropTypes.string.isRequired,
    popular: PropTypes.bool,
    price: PropTypes.string,
    info: PropTypes.string,
    features: PropTypes.array.isRequired
  };
  
  export default PricingBox;
  