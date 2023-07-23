import { Stack, Text } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";
import DashNav from "../../components/DashNav/DashNav";
import { SearchModal } from "../../components";

const CreateProject = () => {
  return (
    <>
      <DashNav />
      <Stack
        pt="20px"
        align="center"
        justify="center"
        color="white"
        h="100vh"
        bg="#0D0D0D"
        w="100%"
      >
        <Flex direction="row">
          <Flex
            pr={{ base: "0", md: "100px" }}
            textAlign="center"
            flex="1"
            justify="center"
          >
            <Stack
              justify="center"
              px="50px"
              borderColor="gray"
              borderWidth={2}
              py={{ base: "100px", md: "0" }}
            >
              <Box>
                <Text pb="2px" fontSize="3xl">
                  Enter Brand Name
                </Text>
                <Text fontSize="sm" color="gray.100">
                  Protect Your Reputation. <br /> Find negative comments and
                  talk to their authors before they turn into a PR crisis.
                </Text>
              </Box>
              <Box mt="20px">
                <SearchModal />
              </Box>
            </Stack>
          </Flex>
          <Flex
            flex="1"
            display={{ base: "none", md: "flex" }}
            justify="center"
          >
            {/* <Image src={vector} w="500px" /> */}
          </Flex>
        </Flex>
      </Stack>
    </>
  );
};

export default CreateProject;
